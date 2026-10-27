import './style.css';
import { Link } from 'react-router-dom';


const healfs = [
  {
    id: 1,
    name: 'Чиа семена',
    description:
      'Суперфуд с высоким содержанием антиоксидантов. Разбухают в жидкости, подходят для пудингов, смузи и выпечки.',
    price: '2 190.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/700x700/e5093ee29d011d36ef795fb40e5067ea.jpg',
  },
  {
    id: 2,
    name: 'Кедровые орехи',
    description:
      'Мелкие нежные ядрышки с лёгким хвойным ароматом. Богаты витаминами, идеальны для соусов, салатов и десертов.',
    price: '770.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/700x700/7c68bba29cd66c0a751b13f6e38b6706.jpg',
  },
  {
    id: 3,
    name: 'Льняные семена',
    description:
      'Крошечные, но очень полезные семена с высоким содержанием Омега-3. Добавляют в смузи, выпечку и йогурты.',
    price: '349.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/700x700/13048b8f4a11867aab0326eb8be77f3f.jpg',
  },
  {
    id: 4,
    name: 'Тыквенные семечки',
    description:
      'Натуральный источник цинка и магния. Хрустящие, слегка сладковатые, хороши в салатах, кашах и как перекус.',
    price: '190.00 руб.',
    image:
      'https://415022.lp.tobiz.net/img/700x700/ef26b497c268b5ef107c8b4fc19018bb.jpg',
  },
];

export default function Healf() {
  return (
    <section className="healf" id="useful">
      <div className="healf-container">

        <h2>
          <span>Полезные</span> для правильного питания
        </h2>

        <p className="healf-subtitle">
          В нашем магазине вы найдете любые виды орехов и семян
        </p>

        <div className="healf-list">
          {healfs.map((healf) => (
            <article className="healf-card" key={healf.id}>

              <img
                src={healf.image}
                alt={healf.name}
              />

              <div className="healf-card-content">

                <h3>{healf.name}</h3>

                <p>{healf.description}</p>

                <div className="healf-price">
                  {healf.price}
                </div>

                <Link className="order-button" 
                to={`/catalog/healf/${healf.id}`}>
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