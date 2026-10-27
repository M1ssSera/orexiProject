import './style.css';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Орехи макадамия',
    description:
      'Изысканное сочетание хрустящих орехов и гладкого шоколада. Роскошный десерт для настоящих гурманов и ценителей.',
    price: '430.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/700x700/d2a2e1f66879ae32334f4b1797402db2.jpg',
  },
  {
    id: 2,
    name: 'Орех пекан',
    description:
      'Маслянистые ядра с нежным вкусом, напоминающим грецкий орех. Отлично дополняет десерты, выпечку и сырные тарелки.',
    price: '399.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/700x700/c3046db11672212db375655137805c7a.jpg',
  },
  {
    id: 3,
    name: 'Фисташки солёные',
    description:
      'Пикантные раскрывшиеся орешки с ярким вкусом. Содержат полезные жиры и белок, любимое лакомство для многих.',
    price: '249.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/700x700/4e80af4789da8103cc4a9ce57696547f.jpg',
  },
  {
    id: 4,
    name: 'Кешью обжаренные',
    description:
      'Нежные маслянистые орехи с деликатным сладковатым вкусом. Богаты железом и цинком, хороши сами по себе и в блюдах.',
    price: '190.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/700x700/bc6280d5a7bf5267b720c7bb0e16bf3b.jpg',
  },
];

export default function Premium() {
  return (
    <section className="premium" id="premium">
      <div className="premium-container">

        <h2>
          <span>Премиум</span> элитные и дорогие
        </h2>

        <p className="premium-subtitle">
          В нашем магазине вы найдете любые виды орехов и семян
        </p>

        <div className="premium-list">
          {products.map((product) => (
            <article className="premium-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="premium-card-content">

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <div className="premium-price">
                  {product.price}
                </div>

                <Link className="order-button" 
                to={`/catalog/premium/${product.id}`}>
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