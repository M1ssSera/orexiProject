import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-info">
          <p>Москва, ул. Центральная, 1, офис 1</p>
          <p>ИНН / ОГРН</p>
          <a href="#">Политика конфиденциальности</a>
        </div>

        <div className="footer-logo">
          <img
            src="https://415022.lp.tobiz.net/img/350x0/0f37fba05b3c41fe5c5da1f593623cdc.png"
            alt="Логотип"
          />
        </div>

        <div className="footer-contact">
          <a href="tel:88221212233">
            8 822 121 22 33
          </a>

          <p>Звонок по России бесплатный</p>

          <div className="messengers">
            <span>VK</span>
            <span>OK</span>
            <span>MAX</span>
          </div>
        </div>

      </div>
    </footer>
  );
}