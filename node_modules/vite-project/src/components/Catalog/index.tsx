import './style.css';
import { Link } from 'react-router-dom';

const photoorehof = [
  {
    id: 1,
    image:
      'https://415022.lp.tobiz.net/img/370x270/9bad66620dd1a9600970e16e350b6868.jpg',
    name: 'Популярные',
    link: '/catalog/popular',
  },
  {
    id: 2,
    image:
      'https://415022.lp.tobiz.net/img/370x270/3d71714dbb6515b637869875c2e11a82.jpg',
    name: 'Премиум',
    link: '/catalog/premium',
  },
  {
    id: 3,
    image:
      'https://415022.lp.tobiz.net/img/370x270/adf9e68e27b83465ce9cd338cc2d7a39.jpg',
    name: 'Полезные',
    link: '/catalog/healf',
  },
  {
    id: 4,
    image:
      'https://415022.lp.tobiz.net/img/370x270/0d51e0c7bec567a7379f7eb23e70f213.jpg',
    name: 'Экзотические',
    link: '/catalog/exotic',
  },
];

export default function Catalog() {
  return (
    <section className="catalog">
      <div className="catalog-container">

        <h1>Каталог товаров</h1>

        <div className="catalog-breadcrumb">
          <Link to="/">Главная</Link>
          <span>/</span>
          <span>Каталог товаров</span>
        </div>

        <div className="photoorehoflist">

          {photoorehof.map((catalog) => (
            <article className="photoorehofcard" key={catalog.id}>

              <img
                src={catalog.image}
                alt={catalog.name}
              />

              <div className="photoorehof-content">

                <h3>{catalog.name}</h3>

                <Link
                  className="button"
                  to={catalog.link}
                >
                  Смотреть товары
                </Link>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}