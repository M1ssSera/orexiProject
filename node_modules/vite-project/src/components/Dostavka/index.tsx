import './style.css';
import Photo from '../Photo';
import Pay from '../Pay';

export default function Dostavka() {
    return (

        <main className="dostavka">
        <section className="dostavka">
            <div className="dostavka-container">
                <div className="dostavka-text">
                    <h1>Доставка</h1>

                    <p>
                <b>Способы доставки:</b>
            </p>

            <ul>
                <li><p><b>Собственный транспорт поставщика.</b>Многие компании используют
                рефрижераторы для поддержания необходимого температурного 
                режима. Например, для охлаждённого мяса температура в грузовом
                отсеке должна быть от 0 до +4 °C, а для замороженного — ниже −8 °C. </p></li>
                </ul>
            
            <ul>
                <li><p><b>Самовывоз со склада.</b>Некоторые поставщики предлагают этот
                вариант, особенно для крупных заказов.</p></li>
                </ul>
            
            <ul>
                <li><p><b>Сотрудничество с транспортными компаниями.</b>Для доставки в
                отдалённые регионы или при больших объёмах груза.</p></li>
                </ul>

            <p>
                <b>Сроки доставки:</b>
            </p>
            
            <ul>
                <li><p>В пределах города или региона — обычно 1–2 дня.</p></li>
                </ul>

            <ul>
                <li><p>В другие регионы — от 1 до 5 дней в зависимости от расстояния.</p></li>
                </ul>

        </div>
                    <div className="aboutus-image">
                        <img src="https://415022.lp.tobiz.net/img/788x1050/4c52be60d9611b03f5bcba3acfa286dd.jpg" alt="доставка и оплата"/>
        </div>
      </div>
    </section>
    <Photo />
    <Pay />
    </main>
  );
}