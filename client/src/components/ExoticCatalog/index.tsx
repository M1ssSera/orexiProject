import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const exoticcatolog = [
  {
    id: 1,
    image:
      'https://415022.lp.tobiz.net/img/270x200/cd61617b45acfe7e66d13b9646d8693e.jpg',
    name: 'Семена конопли',
    description:
      'Питательные зёрнышки с лёгким ореховым привкусом. Добавляют в каши, йогурты,..',
    price: 1040,
  },
  {
    id: 2,
    image:
      'https://415022.lp.tobiz.net/img/270x200/d1fc5c5c16c5adc1f23093d1cd5f1949.jpg',
    name: 'Кокосовые чипсы',
    description:
      'Сладкие хрустящие ломтики с тропическим ароматом. Подходят для десертов,..',
    price: 899,
  },
  {
    id: 3,
    image:
      'https://415022.lp.tobiz.net/img/270x200/c1bb60bff94721d00526ea75431f6a30.jpg',
    name: 'Макадамия',
    description:
      'Самый дорогой орех с нежным сливочным вкусом. Прекрасно сочетается с шоколадом и...',
    price: 630,
  },
  {
    id: 4,
    image:
      'https://415022.lp.tobiz.net/img/270x200/8f1b3b2bc1f31a964f535fd68292f15a.jpg',
    name: 'Бразильский орех',
    description:
      'Крупные маслянистые орехи с кремовой текстурой. Рекордсмен по содержанию...',
    price: 790,
  },
];

export default function ExoticCatalog() {
  const [sort, setSort] = useState('default');

  const sortedProducts = [...exoticcatolog].sort((a, b) => {
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
    <section className="exoticcatalog">
      <div className="exoticcatalog-container">

        <h1>Экзотические</h1>

        <div className="exoticcatalog-breadcrumb">
          <a href="/">Главная</a>
          <span>/</span>
          <a href="/catalog">Каталог</a>
          <span>/</span>
          <span>Экзотические</span>
        </div>

        <div className="exoticcatalog-filters">

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

        <div className="exoticcatalog-list">
          {sortedProducts.map((product) => (
            <article className="healfcatalog-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="exoticcatalog-price">
                {product.price} руб.
              </div>

              <Link
              className="product-button"
              to={`/catalog/exotic/${product.id}`}
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