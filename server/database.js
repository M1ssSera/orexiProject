import Database from 'better-sqlite3';

const db = new Database('shop.db');

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    total REAL NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_name TEXT NOT NULL,
    price REAL NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id)
  );
`);

//добавляем name и email, если старая таблица orders была создана раньше 
const columns = db
  .prepare(`PRAGMA table_info(orders)`)
  .all();

if (!columns.some((column) => column.name === 'name')) {
  db.exec(`ALTER TABLE orders ADD COLUMN name TEXT`);
}

if (!columns.some((column) => column.name === 'email')) {
  db.exec(`ALTER TABLE orders ADD COLUMN email TEXT`);
}

export default db;