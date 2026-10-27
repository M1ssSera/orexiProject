import './style.css';
import { Link } from 'react-router-dom';


const exotics = [
  {
    id: 1,
    name: 'Семена конопли',
    description:
      'Питательные зёрнышки с лёгким ореховым привкусом. Добавляют в каши, йогурты, салаты и выпечку.',
    price: '1 040.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/700x700/cd61617b45acfe7e66d13b9646d8693e.jpg',
  },
  {
    id: 2,
    name: 'Кокосовые чипсы',
    description:
      'Сладкие хрустящие ломтики с тропическим ароматом. Подходят для десертов, гранолы и полезных перекусов.',
    price: '899.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/700x700/d1fc5c5c16c5adc1f23093d1cd5f1949.jpg',
  },
  {
    id: 3,
    name: 'Макадамия',
    description:
      'Самый дорогой орех с нежным сливочным вкусом. Прекрасно сочетается с шоколадом и используется в десертах.',
    price: '630.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/700x700/c1bb60bff94721d00526ea75431f6a30.jpg',
  },
  {
    id: 4,
    name: 'Бразильский орех',
    description:
      'Крупные маслянистые орехи с кремовой текстурой. Рекордсмен по содержанию селена, полезного для иммунитета.',
    price: '790.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/700x700/8f1b3b2bc1f31a964f535fd68292f15a.jpg',
  },
];

export default function Exotic() {
  return (
    <section className="exotic" id="exotic">
      <div className="exotic-container">

        <h2>
          <span>Экзотические</span> необычные товары
        </h2>

        <p className="exotic-subtitle">
          В нашем магазине вы найдете любые виды орехов и семян
        </p>

        <div className="exotic-list">
          {exotics.map((exotic) => (
            <article className="exotic-card" key={exotic.id}>

              <img
                src={exotic.image}
                alt={exotic.name}
              />

              <div className="exotic-card-content">

                <h3>{exotic.name}</h3>

                <p>{exotic.description}</p>

                <div className="exotic-price">
                  {exotic.price}
                </div>

                <Link className="order-button" 
                to={`/catalog/exotic/${exotic.id}`}>
                  Заказать
                  </Link>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}