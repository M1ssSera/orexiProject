import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const premiumcatolog = [
  {
    id: 1,
    image:
      'https://415022.lp.tobiz.net/img/270x200/d2a2e1f66879ae32334f4b1797402db2.jpg',
    name: 'Орехи макадамия',
    description:
      'Изысканный орех с нежным сливочным вкусом. Отличный вариант для настоящих ценителей.',
    price: 430,
  },
  {
    id: 2,
    image:
      'https://415022.lp.tobiz.net/img/270x200/c3046db11672212db375655137805c7a.jpg',
    name: 'Орех пекан',
    description:
      'Маслянистые ядра с нежным вкусом, напоминающим грецкий орех. Подходит для десертов и выпечки.',
    price: 399,
  },
  {
    id: 3,
    image:
      'https://415022.lp.tobiz.net/img/270x200/4e80af4789da8103cc4a9ce57696547f.jpg',
    name: 'Фисташки солёные',
    description:
      'Пикантные раскрывшиеся орешки с ярким вкусом. Прекрасный вариант для перекуса.',
    price: 249,
  },
  {
    id: 4,
    image:
      'https://415022.lp.tobiz.net/img/270x200/bc6280d5a7bf5267b720c7bb0e16bf3b.jpg',
    name: 'Кешью обжаренные',
    description:
      'Нежные маслянистые орехи с деликатным сладковатым вкусом. Хороши сами по себе и в блюдах.',
    price: 190,
  },
];

export default function PremiumCatalog() {
  const [sort, setSort] = useState('default');

  const sortedProducts = [...premiumcatolog].sort((a, b) => {
    if (sort === 'cheap') {
      return a.price - b.price;
    }

    if (sort === 'expensive') {
      return b.price - a.price;
    }

    if (sort === 'old') {
      return a.id - b.id;
    }

    if (sort === 'new') {
      return b.id - a.id;
    }

    return 0;
  });

  return (
    <section className="premiumcatalog">
      <div className="premiumcatalog-container">

        <h1>Премиум</h1>

        <div className="premiumcatalog-breadcrumb">
          <a href="/">Главная</a>
          <span>/</span>
          <a href="/catalog">Каталог</a>
          <span>/</span>
          <span>Премиум</span>
        </div>

        <div className="premiumcatalog-filters">

          <div className="filter">
            <label>Показывать:</label>

            <select defaultValue="24">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
              <option value="96">96</option>
            </select>
          </div>

          <div className="filter">
            <label>Сортировать:</label>

            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="default">По умолчанию</option>
              <option value="cheap">Сначала дешевые</option>
              <option value="expensive">Сначала дорогие</option>
              <option value="old">ID (возраст.)</option>
              <option value="new">ID (убыв.)</option>
            </select>
          </div>

        </div>

        <div className="premiumcatalog-list">
          {sortedProducts.map((product) => (
            <article className="premiumcatalog-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="premiumcatalog-price">
                {product.price} руб.
              </div>

              <Link
              className="product-button"
              to={`/catalog/premium/${product.id}`}
              >
                Перейти
            </Link>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}