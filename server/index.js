import express from 'express';
import cors from 'cors';
import db from './database.js';

const app = express();

app.use(cors());
app.use(express.json());

//проверка сервера

app.get('/', (req, res) => {
  res.json({
    message: 'Backend работает',
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    message: 'Сервер работает',
  });
});

//юзеры/заявки

app.post('/api/messages', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: 'Введите имя и email',
    });
  }

  const result = db
    .prepare(`
      INSERT INTO messages (name, email)
      VALUES (?, ?)
    `)
    .run(name, email);

  res.json({
    message: 'Заявка сохранена',
    id: result.lastInsertRowid,
  });
});

app.get('/api/messages', (req, res) => {
  const messages = db
    .prepare(`
      SELECT *
      FROM messages
      ORDER BY id DESC
    `)
    .all();

  res.json(messages);
});

//создание заказа

app.post('/api/orders', (req, res) => {
  const { name, email, items, total } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: 'Введите имя и email',
    });
  }

  if (!items || items.length === 0) {
    return res.status(400).json({
      message: 'Корзина пуста',
    });
  }

  const createOrder = db.transaction(() => {
    const order = db
      .prepare(`
        INSERT INTO orders (name, email, total)
        VALUES (?, ?, ?)
      `)
      .run(name, email, total);

    const orderId = order.lastInsertRowid;

    const addItem = db.prepare(`
      INSERT INTO order_items
      (order_id, product_name, price, quantity)
      VALUES (?, ?, ?, ?)
    `);

    for (const item of items) {
      addItem.run(
        orderId,
        item.name,
        item.price,
        item.quantity
      );
    }

    return orderId;
  });

  const orderId = createOrder();

  res.json({
    message: 'Заказ сохранён',
    orderId,
  });
});

//заказы

app.get('/api/orders', (req, res) => {
  const orders = db
    .prepare(`
      SELECT *
      FROM orders
      ORDER BY id DESC
    `)
    .all();

  res.json(orders);
});

//товары

app.get('/api/order-items', (req, res) => {
  const items = db
    .prepare(`
      SELECT *
      FROM order_items
      ORDER BY id DESC
    `)
    .all();

  res.json(items);
});

app.listen(5000, () => {
  console.log('Сервер запущен: http://localhost:5000');
});