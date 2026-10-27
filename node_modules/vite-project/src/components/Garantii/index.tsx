import './style.css'
import Sertificats from '../Sertificats';
import Documental from '../Documental';

export default function Garantii () {
    return (
        <main className="garantii-page">

      <section className="quality-section">
        <div className="quality-text">
          <h1>Гарантии качества</h1>

          <h2>Сертификация</h2>

                <ul>
            <li>
              Ветеринарные свидетельства (ВСД в системе «Меркурий»)
            </li>
            <li>
              Декларации соответствия ТР ТС 034/2013
            </li>
            <li>
              Протоколы лабораторных испытаний
              (микробиология, антибиотики, гормоны)
            </li>
          </ul>

          <h2>Контроль качества</h2>

          <ul>
            <li>Ежедневный мониторинг условий хранения на складе</li>
            <li>
              Проверка каждой партии перед отгрузкой
              (цвет, запах, структура)
            </li>
            <li>
              Возможность выборочной проверки покупателем при приёмке
            </li>
          </ul>

          <h2>Срок годности</h2>

          <ul>
            <li>Охлаждённое мясо: 5–7 суток при +2...+4°C</li>
            <li>Замороженное: до 12 месяцев при −18°C</li>
          </ul>

          <h2>Возврат и замена</h2>

          <ul>
            <li>При выявлении брака — замена партии в течение 24 часов</li>
            <li>
              Компенсация стоимости при невозможности замены
            </li>
          </ul>
        </div>


                <div className="quality-image">
          <img src="https://415022.lp.tobiz.net/img/788x1050/5abea5b3a7a6032835d390293f1c26dc.jpg" alt="Орехи"/>
        </div>
      </section>

      <Sertificats />

      <Documental />

    </main>
  );
}