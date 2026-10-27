import './style.css';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Семечки подсолнечника',
    description:
      'Аппетитные золотистые ядрышки с приятным ароматом. Отлично подходят к пиву или как самостоятельный вкусный и полезный перекус.',
    price: '1 499.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/525x525/0e3cab38d860aa4b36990410c484115b.jpg',
  },
  {
    id: 2,
    name: 'Миндаль сырой',
    description:
      'Хрустящие орешки с нежным сладковатым вкусом. Содержат витамин Е, полезны для кожи и сердца. Прекрасный вариант для перекуса.',
    price: '349.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/525x525/2fca8ef7c69e814a5b863e9aea1150b9.jpg',
  },
  {
    id: 3,
    name: 'Грецкие орехи',
    description:
      'Крупные ядра с насыщенным вкусом, богаты полезными жирами. Идеальны для десертов, выпечки и здоровых перекусов в течение дня.',
    price: '190.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/525x525/b4832320fc5f587bc2b7a79186bc22f9.jpg',
  },
];

export default function PopularProducts() {
  return (
    <section className="popularproducts" id="popular">
      <div className="popularproducts-container">

        <h2>
          <span>Популярные</span> хиты продаж
        </h2>

        <p className="popular-subtitle">
          В нашем магазине вы найдете любые виды орехов и семян
        </p>

        <div className="popularcontent">

        <div className="popularcategories">
  <a href="#popular">Популярные</a>
  <a href="#premium">Премиум</a>
  <a href="#useful">Полезные</a>
  <a href="#exotic">Экзотические</a>
</div>
          <div className="popularlist">
            {products.map((product) => (
              <article className="popularcard" key={product.id}>

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="popularcard-content">

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="popularprice">
                    {product.price}
                  </div>

                  <Link className="order-button"
                  to={`/catalog/popular/${product.id}`}>
                    Заказать </Link>

                </div>

              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}