import { createContext, useContext, useState } from 'react';

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  const addToCart = (product: any) => {
    const key = `${product.category}-${product.id}`;

    setCart((oldCart) => {
      const item = oldCart.find((item) => item.key === key);

      if (item) {
        return oldCart.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...oldCart,
        {
          ...product,
          key,
          quantity: 1,
        },
      ];
    });

    setOpen(true);
  };

  const removeFromCart = (key: string) => {
    setCart(
      cart.filter((item) => item.key !== key)
    );
  };

  const changeQuantity = (
    key: string,
    quantity: number
  ) => {
    setCart(
      cart.map((item) =>
        item.key === key
          ? { ...item, quantity }
          : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        open,
        setOpen,
        addToCart,
        removeFromCart,
        changeQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}