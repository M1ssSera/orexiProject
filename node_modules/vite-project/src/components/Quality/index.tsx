import { useState } from 'react';
import './style.css';

export default function Quality() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert('Заявка отправлена!');

      setName('');
      setEmail('');
      setOpen(false);
    } catch (error) {
      alert('Не удалось отправить заявку');
      console.error(error);
    }
  };

  return (
    <>
      <section className="quality-home">
        <div className="quality-home-container">

          <div className="quality-home-text">
            <h2>Высокое качество</h2>

            <p>
              Мы тщательно отбираем только лучшие орехи и семена, используя
              натуральные ингредиенты без химической обработки. Каждый продукт
              проходит многоступенчатый контроль, чтобы гарантировать вам
              безупречный вкус и пользу.
            </p>

            <button
              type="button"
              onClick={() => setOpen(true)}
            >
              Заказать
            </button>
          </div>

          <div className="quality-home-image">
            <img
              src="https://415022.lp.tobiz.net/img/1050x1050/787abb3b1d45063dbf6221a1cb7bab77.jpg"
              alt="Орехи"
            />
          </div>

        </div>
      </section>

      {open && (
        <div
          className="quality-popup"
          onClick={() => setOpen(false)}
        >
          <div
            className="quality-popup-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="quality-popup-close"
              type="button"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <h2>Оставить заявку</h2>

            <form onSubmit={handleSubmit}>

              <label>Введите имя</label>

              <input
                type="text"
                placeholder="Введите имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label>Введите email</label>

              <input
                type="email"
                placeholder="Введите email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit">
                Отправить
              </button>

            </form>

            <p className="quality-popup-agreement">
              Нажимая на кнопку, Вы принимаете{' '}
              <u>Положение</u> и <u>Согласие</u> на обработку
              персональных данных.
            </p>

          </div>
        </div>
      )}
    </>
  );
}