import './style.css';

const otzavyclientov = [
  {
    id: 1,
    description:
      'Фисташки просто бомба! Упаковка герметичная, все орешки раскрытые, ни одного пустого. Цена порадовала – дешевле, чем в супермаркете.',
    name: 'Андрей, г. Казань',
    image:
      'https://415022.lp.tobiz.net/img/1050x525/8c160f3d9245cd6b4cddbf4710a72c10.jpg',
  },
  {
    id: 2,
    description:
      'Быстрая доставка и свежайшие орехи! Заказываю уже в третий раз – качество неизменно на высоте. Особенно порадовали грецкие орехи – как на фото!',
    name: 'Мария, г. Москва',
    image:
      'https://415022.lp.tobiz.net/img/1050x525/94289d47b0f6e2a84fe4c3eb8c33ef90.jpg',
  },
  {
    id: 3,
    description:
      'Кешью – просто пальчики оближешь! Заказывал оптом для кафе – все клиенты в восторге. Будем сотрудничать и дальше!',
    name: 'Иван, г. Краснодар',
    image:
      'https://415022.lp.tobiz.net/img/1050x525/1768767725f73ad7d1e1caa414672b93.jpg',
  },
];

export default function Otzavy() {
  return (
    <section className="otzavy">
      <div className="otzavy-container">

        <h2>
          <span>Впечатления</span> наших клиентов
        </h2>

        <div className="otzavy-list">
          {otzavyclientov.map((otzavy) => (
            <article className="otzavy-card" key={otzavy.id}>

              <img
                src={otzavy.image}
                alt={otzavy.name}
              />

              <div className="otzavy-card-content">
                <h3>{otzavy.description}</h3>
                <p><b>{otzavy.name}</b></p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}