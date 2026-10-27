import { useState } from 'react';
import './style.css';

export default function Question() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://localhost:5000/api/messages',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert('Заявка отправлена!');

      setName('');
      setEmail('');
    } catch (error) {
      console.error(error);
      alert('Ошибка соединения с сервером');
    }
  };

  return (
    <section className="question">
      <div className="question-container">

        <div className="question-image">
          <img
            src="https://415022.lp.tobiz.net/img/1575x1225/09812030b1f5adfd6cee561686d5e535.jpg"
            alt="Орехи"
          />
        </div>

        <div className="question-form">

          <h2>
            <span>Если есть вопросы,</span>
            <br />
            напишите нам
          </h2>

          <p className="question-subtitle">
            Мы ответим вам в ближайшее время
          </p>

          <form onSubmit={handleSubmit}>

            <label>
              Введите имя
            </label>

            <input
              type="text"
              placeholder="Введите имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>
              Введите email
            </label>

            <input
              type="email"
              placeholder="Введите email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">
              Написать
            </button>

          </form>

          <p className="question-agreement">
            Нажимая на кнопку, Вы принимаете{' '}
            <u>Положение</u> и <u>Согласие</u> на обработку
            персональных данных.
          </p>

        </div>

      </div>
    </section>
  );
}