import { useState } from 'react';
import './style.css';

export default function DostavkaOplata() {
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
      console.error(error);
      alert('Не удалось отправить заявку');
    }
  };

  return (
    <>
      <section className="dostavkaoplata">
        <img
          src="https://415022.lp.tobiz.net/img/1050x1050/08a571e51e18422835d24bcc4b511623.jpg"
          alt="Доставка"
        />

        <div className="dostavkaoplata-container">
          <div className="dostavkaoplata-text">
            <h2>Доставка и оплата</h2>

            <p>
              Наша компания доставляет товар с помощью службы
              доставки, оплата производится при получении.
            </p>

            <button
              type="button"
              onClick={() => setOpen(true)}
            >
              Написать нам
            </button>

            <img
              className="dostavkaoplata-second-image"
              src="https://415022.lp.tobiz.net/img/823x350/a4b79723fce85a783d3a7b7a6b4cf136.jpg"
              alt="Доставка и оплата"
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