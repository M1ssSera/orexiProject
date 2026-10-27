import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const popularcatolog = [
  {
    id: 1,
    image:
      'https://415022.lp.tobiz.net/img/270x200/0e3cab38d860aa4b36990410c484115b.jpg',
    name: 'Семечки подсолнечника',
    description:
      'Аппетитные золотистые ядрышки с приятным ароматом. Отлично подходят к пиву или как самостоятельный вкусный и полезный перекус.',
    price: 1499,
  },
  {
    id: 2,
    image:
      'https://415022.lp.tobiz.net/img/270x200/2fca8ef7c69e814a5b863e9aea1150b9.jpg',
    name: 'Миндаль сырой',
    description:
      'Хрустящие орешки с нежным сладковатым вкусом. Содержат витамин Е, полезны для кожи и сердца. Прекрасный вариант для перекуса.',
    price: 349,
  },
  {
    id: 3,
    image:
      'https://415022.lp.tobiz.net/img/270x200/b4832320fc5f587bc2b7a79186bc22f9.jpg',
    name: 'Грецкие орехи',
    description:
      'Крупные ядра с насыщенным вкусом, богаты полезными жирами. Идеальны для десертов, выпечки и здоровых перекусов.',
    price: 190,
  },
];

export default function PopularCatalog() {
  const [sort, setSort] = useState('default');

  const sortedProducts = [...popularcatolog].sort((a, b) => {
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
    <section className="popularcatalog">
      <div className="popularcatalog-container">

        <h1>Популярные</h1>

        <div className="popularcatalog-breadcrumb">
          <a href="/">Главная</a>
          <span>/</span>
          <a href="/catalog">Каталог</a>
          <span>/</span>
          <span>Популярные</span>
        </div>

        <div className="popularcatalog-filters">

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

        <div className="popularcatalog-list">
          {sortedProducts.map((product) => (
            <article className="popularcatalog-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="popularcatalog-price">
                {product.price} руб.
              </div>

              <Link
              className="product-button"
              to={`/catalog/popular/${product.id}`}
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