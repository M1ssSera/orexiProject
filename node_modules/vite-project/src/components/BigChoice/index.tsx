import './style.css';
import { Link } from 'react-router-dom';

export default function BigChoice() {
  return (
    <section className="bigchoise">
      <div className="bigchoise-container">

        <div className="bigchoise-overlay">
          <div className="bigchoise-text">

            <h2>Большой выбор</h2>

            <p>
              Наш ассортимент — это сочетание традиционных вкусов и
              эксклюзивных позиций. От классических грецких орехов до
              редких сортов макадамии — у нас есть всё для истинных
              ценителей натуральных лакомств.
            </p>

            <Link className="button" to="/catalog">
            Перейти в каталог 
          </Link>

          </div>
        </div>

      </div>
    </section>
  );
}