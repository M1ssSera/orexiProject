import './style.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        <div className="header-left">
          <p>Интернет-магазин орехов и семечек</p>
          <p>Работаем в Москве и МО</p>
          <p>Доставляем в регионы</p>
        </div>

        <div className="header-center">
          <img
            src="https://415022.lp.tobiz.net/img/350x0/0f37fba05b3c41fe5c5da1f593623cdc.png"
            alt="Логотип магазина"
          />
        </div>

        <a
          className="header-phone"
          href="tel:88221212233"
        >
          8 822 121 22 33
        </a>

      </div>
    </header>
  );
}