import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const healfcatolog = [
  {
    id: 1,
    image:
      'https://415022.lp.tobiz.net/img/270x200/e5093ee29d011d36ef795fb40e5067ea.jpg',
    name: 'Чиа семена',
    description:
      'Суперфуд с высоким содержанием антиоксидантов. Разбухают в жидкости,..',
    price: 2190,
  },
  {
    id: 2,
    image:
      'https://415022.lp.tobiz.net/img/270x200/7c68bba29cd66c0a751b13f6e38b6706.jpg',
    name: 'Кедровые орехи',
    description:
      'Мелкие нежные ядрышки с лёгким хвойным ароматом. Богаты витаминами, идеальны...',
    price: 770,
  },
  {
    id: 3,
    image:
      'https://415022.lp.tobiz.net/img/270x200/13048b8f4a11867aab0326eb8be77f3f.jpg',
    name: 'Льяные семена',
    description:
      'Крошечные, но очень полезные семена с высоким содержанием Омега-3.',
    price: 349,
  },
  {
    id: 4,
    image:
      'https://415022.lp.tobiz.net/img/270x200/ef26b497c268b5ef107c8b4fc19018bb.jpg',
    name: 'Тыквенные семечки',
    description:
      'Натуральный источник цинка и магния. Хрустящие, слегка сладковатые, хороши в...',
    price: 560,
  },
];

export default function HealfCatalog() {
  const [sort, setSort] = useState('default');

  const sortedProducts = [...healfcatolog].sort((a, b) => {
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
    <section className="healfcatalog">
      <div className="healfcatalog-container">

        <h1>Полезные</h1>

        <div className="healfcatalog-breadcrumb">
          <a href="/">Главная</a>
          <span>/</span>
          <a href="/catalog">Каталог</a>
          <span>/</span>
          <span>Полезные</span>
        </div>

        <div className="healfcatalog-filters">

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

        <div className="healfcatalog-list">
          {sortedProducts.map((product) => (
            <article className="healfcatalog-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="healfcatalog-price">
                {product.price} руб.
              </div>

              <Link
              className="product-button"
              to={`/catalog/healf/${product.id}`}
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