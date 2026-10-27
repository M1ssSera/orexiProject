import { useState } from 'react';
import './style.css';
import { useCart } from '../../context/CartContext';

export default function Cart() {
  const {
    cart,
    open,
    setOpen,
    removeFromCart,
    changeQuantity,
    total,
  } = useCart();

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://localhost:5000/api/orders',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            items: cart,
            total,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert('Заказ успешно оформлен!');

      setName('');
      setEmail('');
      setCheckoutOpen(false);
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert('Ошибка соединения с сервером');
    }
  };

  return (
    <>
      <button
        className="cart-icon"
        onClick={() => setOpen(true)}
      >
        🛒

        {cart.length > 0 && (
          <span>{cart.length}</span>
        )}
      </button>

      {open && (
        <div className="cart-window">

          <div className="cart-header">
            <h2>🛒 Корзина</h2>

            <button
              className="cart-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="cart-count">
            {cart.length} товаров в корзине
          </div>

          <div className="cart-title">
            <span>Фото</span>
            <span>Название</span>
            <span>Количество</span>
            <span>Цена</span>
          </div>

          {cart.map((item: any) => (
            <div className="cart-item" key={item.key}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-product">
                <h3>{item.name}</h3>

                <p>{item.price} руб.</p>

                <small>(цена за шт.)</small>
              </div>

              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  changeQuantity(
                    item.key,
                    Number(e.target.value)
                  )
                }
              />

              <div className="cart-price">
                {item.price * item.quantity} руб.
              </div>

              <button
                className="delete-button"
                onClick={() =>
                  removeFromCart(item.key)
                }
              >
                🗑
              </button>

            </div>
          ))}

          <div className="cart-total">
            Итого: {total} руб.
          </div>

          <div className="cart-footer">
            <button
              onClick={() => setCheckoutOpen(true)}
              disabled={cart.length === 0}
            >
              Перейти к оформлению
            </button>
          </div>

        </div>
      )}

      {checkoutOpen && (
        <div
          className="checkout-overlay"
          onClick={() => setCheckoutOpen(false)}
        >
          <div
            className="checkout-popup"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="checkout-close"
              type="button"
              onClick={() => setCheckoutOpen(false)}
            >
              ×
            </button>

            <h2>Оформление заказа</h2>

            <p>
              Сумма заказа: <strong>{total} руб.</strong>
            </p>

            <form onSubmit={handleCheckout}>

              <label>Введите имя</label>

              <input
                type="text"
                placeholder="Введите имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label>Введите email</label>

              <input
                type="email"
                placeholder="Введите email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                className="checkout-submit"
                type="submit"
              >
                Оформить заказ
              </button>

            </form>

            <p className="checkout-agreement">
              Я даю согласие на обработку персональных данных.
            </p>

          </div>
        </div>
      )}
    </>
  );
}