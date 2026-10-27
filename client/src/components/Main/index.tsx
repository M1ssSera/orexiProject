import './style.css';
import PopularProduct from '../PopularProduct';
import Premium from '../Premium';
import Healf from '../Healf';
import Exotic from '../Exotic';
import Choicestore from '../Choicestore';
import Quality from '../Quality';
import BigChoice from '../BigChoice';
import DostavkaOplata from '../DostavkaOplata';
import Otzavy from '../Otzavy/Index';
import Question from '../Question';

export default function Main() {
  return (
    <section className="main">

      <div className="main-hero">
        <div className="main-overlay">
          <div className="main-content">
            <h1>
              Интернет-магазин орехов и семечек
              <br />
              <span>"Ореховый Рай"</span>
            </h1>

            <p className="maintext">
              Насладитесь природной пользой! Свежие орехи и семечки с быстрой
              доставкой
              <br />
              Скидки на крупные заказы до 25%
            </p>

            <ul>
              <li>100% натуральные продукты</li>
              <li>Собственный контроль качества</li>
              <li>Широкий ассортимент: от миндаля до тыквенных семечек</li>
              <li>Выгодные оптовые цены</li>
            </ul>
          </div>
        </div>
      </div>

      <PopularProduct />
      <Premium />
      <Healf />
      <Exotic />
      <Choicestore />
      <Quality />
      <BigChoice />
      <DostavkaOplata />
      <Otzavy />
      <Question />

    </section>
  );
}