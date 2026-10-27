import './style.css';

const certificates = [
  {
    id: 1,
    image:
      'https://415022.lp.tobiz.net/img/700x1015/eefc3d32b7815d34394117f0c7eff2d5.jpg',
  },

  {
    id: 2,
    image:
      'https://415022.lp.tobiz.net/img/700x1015/16043b25f058b0a078e41f4ae40767d4.jpg',
  },

  {
    id: 3,
    image:
      'https://415022.lp.tobiz.net/img/700x1015/e9026b517b1908ec43491a3ebbe0b719.jpg',
  },

  {
    id: 4,
    image:
      'https://415022.lp.tobiz.net/img/700x1015/cfc0617fe70a1df4213a6f2b1f4fad07.jpg',
  },

  {
    id: 5,
    image:
      'https://415022.lp.tobiz.net/img/700x1015/e3cb1a2b5fc2f4a77eebf6dd7356b20f.jpg',
  },
];

export default function Sertificats() {
  return (
    <section className="certificates">
      <h2>Наши сертификаты</h2>

      <p>Ветеринарные сопроводительные документы (ВСД)</p>

      <div className="certificates-list">
        {certificates.map((certificate) => (
          <div className="certificate" key={certificate.id}>
            <img
              src={certificate.image}
              alt={`Сертификат ${certificate.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}