import './style.css'

const choicesphoto = [
  {
    id: '01',
    title: 'Новейшая технология хранения',
    text: 'Мы используем вакуумную упаковку и климат-контроль, чтобы сохранить свежесть и полезные свойства орехов и семян. Хрустящие и ароматные.',
    image:
      'https://415022.lp.tobiz.net/img/1050x1050/0c1dcd5d0a2b8cc727808080707c3043.png',
  },
  {
    id: '02',
    title: 'Высокая степень отбора сырья',
    text: 'Работаем напрямую с проверенными фермерами и выбираем только лучшие сорта. Каждая партия орехов проходит строгий контроль качества.',
    image:
      'https://415022.lp.tobiz.net/img/1050x1050/3da950f98658e05eaf269004c7da70cf.png',
  },
  {
    id: '03',
    title: 'Регулярное обновление ассортимента',
    text: 'Постоянно добавляем новые позиции — от редких орехов до органических суперфудов. У нас всегда есть чем удивить даже самых искушенных покупателей.',
    image:
      'https://415022.lp.tobiz.net/img/1050x1050/f9fc11c4f5019ba4cad18a2d09e24805.png',
  },
  {
    id: '04',
    title: 'Регулярное обновление ассортимента',
    text: 'Здесь должен быть расположен текст, благодаря которому клиент поймет, почему должен купить товар именно в этом магазине.',
    image:
      'https://415022.lp.tobiz.net/img/1050x1050/28b1559073c9cea6227174718537fb23.png',
  },
  {
    id: '05',
    title: 'Неповторимый стиль упаковки',
    text: 'Здесь должен быть расположен текст, благодаря которому клиент поймет, почему должен купить товар именно в этом магазине.',
    image:
      'https://415022.lp.tobiz.net/img/1050x1050/82c2ef29c17dd8c0bc879cd1a7e1e562.png',
  },
  {
    id: '06',
    title: 'Доставка со склада до двери',
    text: 'Здесь должен быть расположен текст, благодаря которому клиент поймет, почему должен купить товар именно в этом магазине.',
    image:
      'https://415022.lp.tobiz.net/img/1050x1050/56e8613aeb5c982f523d0ad36ad3ef65.png',
  },
];

export default function Choicestore() {
  return (
    <section className="choicestore">
      <div className="choicestore-title">
        <h1>
          <span>Почему выбирают</span> наш магазин
        </h1>
      </div>

      <div className="choicestore-list">
        {choicesphoto.map((item) => (
          <div
            className="choice"
            key={item.id}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="choice-overlay">
              <span className="choice-number">{item.id}</span>

              <h2>{item.title}</h2>

              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}