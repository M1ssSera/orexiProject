import './style.css';

const photo = [
  {
    id: 1,
    image:
      'https://415022.lp.tobiz.net/img/656x490/189ca6dfa253ca6643aeb86b85252e4a.jpg',
  },

  {
    id: 2,
    image:
      'https://415022.lp.tobiz.net/img/656x490/73cc4f2b5908d3c07b7ea3277c51b9ab.jpg',
  },

  {
    id: 3,
    image:
      'https://415022.lp.tobiz.net/img/656x490/9657df4f5cd3a3caabcd7c1b0afc8a5e.jpg',
  },
];

export default function Photo() {
  return (
    <section className="photo">
      <div className="photo-list">
        {photo.map((item) => (
          <div className="photo-item" key={item.id}>
            <img src={item.image} alt={`Фото ${item.id}`} />
          </div>
        ))}
      </div>
    </section>
  );
}