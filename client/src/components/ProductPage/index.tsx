import { Link, useParams } from 'react-router-dom';
import './style.css';
import { useCart } from '../../context/CartContext';

const products = [
  // популярные
  {
    id: 1,
    category: 'popular',
    categoryName: 'Популярные',
    name: 'Семечки подсолнечника',
    image:
      'https://415022.lp.tobiz.net/img/525x525/0e3cab38d860aa4b36990410c484115b.jpg',
    description:
      'Аппетитные золотистые ядрышки с приятным ароматом. Отлично подходят к пиву или как самостоятельный вкусный и полезный перекус.',
    price: 1499,
  },
  {
    id: 2,
    category: 'popular',
    categoryName: 'Популярные',
    name: 'Миндаль сырой',
    image:
      'https://415022.lp.tobiz.net/img/525x525/2fca8ef7c69e814a5b863e9aea1150b9.jpg',
    description:
      'Хрустящие орешки с нежным сладковатым вкусом. Прекрасный вариант для перекуса.',
    price: 349,
  },
  {
    id: 3,
    category: 'popular',
    categoryName: 'Популярные',
    name: 'Грецкие орехи',
    image:
      'https://415022.lp.tobiz.net/img/525x525/b4832320fc5f587bc2b7a79186bc22f9.jpg',
    description:
      'Крупные ядра с насыщенным вкусом, богаты полезными жирами.',
    price: 190,
  },

  // премиум
  {
    id: 1,
    category: 'premium',
    categoryName: 'Премиум',
    name: 'Орехи макадамия',
    image:
      'https://415022.lp.tobiz.net/img/700x700/d2a2e1f66879ae32334f4b1797402db2.jpg',
    description:
      'Изысканное сочетание хрустящих орехов и гладкого шоколада. Роскошный десерт для настоящих гурманов и ценителей.',
    price: 430,
  },
  {
    id: 2,
    category: 'premium',
    categoryName: 'Премиум',
    name: 'Орех пекан',
    image:
      'https://415022.lp.tobiz.net/img/700x700/c3046db11672212db375655137805c7a.jpg',
    description:
      'Маслянистые ядра с нежным вкусом, напоминающим грецкий орех.',
    price: 399,
  },
  {
    id: 3,
    category: 'premium',
    categoryName: 'Премиум',
    name: 'Фисташки солёные',
    image:
      'https://415022.lp.tobiz.net/img/700x700/4e80af4789da8103cc4a9ce57696547f.jpg',
    description:
      'Пикантные раскрывшиеся орешки с ярким вкусом.',
    price: 249,
  },
  {
    id: 4,
    category: 'premium',
    categoryName: 'Премиум',
    name: 'Кешью обжаренные',
    image:
      'https://415022.lp.tobiz.net/img/700x700/bc6280d5a7bf5267b720c7bb0e16bf3b.jpg',
    description:
      'Нежные маслянистые орехи с деликатным сладковатым вкусом.',
    price: 190,
  },

  
  {
    id: 1,
    category: 'healf',
    categoryName: 'Полезные',
    name: 'Чиа семена',
    image:
      'https://415022.lp.tobiz.net/img/700x700/e5093ee29d011d36ef795fb40e5067ea.jpg',
    description:
      'Суперфуд с высоким содержанием антиоксидантов.',
    price: 2190,
  },
  {
    id: 2,
    category: 'healf',
    categoryName: 'Полезные',
    name: 'Кедровые орехи',
    image:
      'https://415022.lp.tobiz.net/img/700x700/7c68bba29cd66c0a751b13f6e38b6706.jpg',
    description:
      'Мелкие нежные ядрышки с лёгким хвойным ароматом.',
    price: 770,
  },
  {
    id: 3,
    category: 'healf',
    categoryName: 'Полезные',
    name: 'Льняные семена',
    image:
      'https://415022.lp.tobiz.net/img/700x700/13048b8f4a11867aab0326eb8be77f3f.jpg',
    description:
      'Полезные семена с высоким содержанием Омега-3.',
    price: 349,
  },
  {
    id: 4,
    category: 'healf',
    categoryName: 'Полезные',
    name: 'Тыквенные семечки',
    image:
      'https://415022.lp.tobiz.net/img/700x700/ef26b497c268b5ef107c8b4fc19018bb.jpg',
    description:
      'Натуральный источник цинка и магния.',
    price: 190,
  },

  
  {
    id: 1,
    category: 'exotic',
    categoryName: 'Экзотические',
    name: 'Семена конопли',
    image:
      'https://415022.lp.tobiz.net/img/700x700/cd61617b45acfe7e66d13b9646d8693e.jpg',
    description:
      'Питательные зёрнышки с лёгким ореховым привкусом.',
    price: 1040,
  },
  {
    id: 2,
    category: 'exotic',
    categoryName: 'Экзотические',
    name: 'Кокосовые чипсы',
    image:
      'https://415022.lp.tobiz.net/img/700x700/d1fc5c5c16c5adc1f23093d1cd5f1949.jpg',
    description:
      'Сладкие хрустящие ломтики с тропическим ароматом.',
    price: 899,
  },
  {
    id: 3,
    category: 'exotic',
    categoryName: 'Экзотические',
    name: 'Макадамия',
    image:
      'https://415022.lp.tobiz.net/img/700x700/c1bb60bff94721d00526ea75431f6a30.jpg',
    description:
      'Орех с нежным сливочным вкусом.',
    price: 630,
  },
  {
    id: 4,
    category: 'exotic',
    categoryName: 'Экзотические',
    name: 'Бразильский орех',
    image:
      'https://415022.lp.tobiz.net/img/700x700/8f1b3b2bc1f31a964f535fd68292f15a.jpg',
    description:
      'Крупные маслянистые орехи с кремовой текстурой.',
    price: 790,
  },
];

export default function ProductPage() {
  const { category, id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) =>
      item.category === category &&
      item.id === Number(id)
  );

  if (!product) {
    return <h1>Товар не найден</h1>;
  }

  return (
    <section className="product-page">
      <div className="product-container">

        <div className="product-breadcrumb">
          <Link to="/">Главная</Link> /
          <Link to="/catalog">Каталог</Link> /
          <Link to={`/catalog/${category}`}>
            {product.categoryName}
          </Link> /
          {product.name}
        </div>

        <div className="product-main">

          <div>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />

            <img
              className="product-mini"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-info">

            <h1>{product.name}</h1>

            <p className="product-stock">
               В наличии
            </p>

            <p>{product.description}</p>

            <h2>{product.price} руб.</h2>

            <button onClick={() => addToCart(product)}>
              В корзину
              </button>

          </div>

        </div>

        <div className="product-description">
          <h2>Описание</h2>
          <p>{product.description}</p>
        </div>

      </div>
    </section>
  );
}