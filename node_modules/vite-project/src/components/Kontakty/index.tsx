import './style.css';

export default function Kontakty() {
  return (
    <main className="kontakty-page">
      <section className="kontakty">
        <div className="kontakty-container">

          <div className="kontakty-info">
            <h1>Контакты</h1>

            <div className="kontakty-text">
              <p>
                Адрес: 123456, г. Москва, ул. Центральная 1,
                <br />
                офис 1
              </p>

              <p>
                e-mail: Test@yandex.ru
              </p>

              <p>
                Телефон: 8 822 121 22 23 &nbsp; отдела продаж
                <br />
                Телефон: 8 821 122 23 33 &nbsp; отдела сбыта
                <br />
                Контактное лицо: Степанов В.И.
              </p>

              <p className="social">
                Присоединяйтесь к нам в социальных
                <br />
                сетях!
              </p>

              <div className="messengers">
                <a href="#">VK</a>
                <a href="#">OK</a>
                <a href="#">MAX</a>
              </div>
            </div>
          </div>

          <div className="map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.617644%2C55.755819&z=12&l=map"
              title="Карта"
            />
          </div>

        </div>
      </section>
    </main>
  );
}