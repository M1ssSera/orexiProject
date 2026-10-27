import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Cart from './components/Cart';

import { CartProvider } from './context/CartContext';

import './App.css';

export default function App() {
  useEffect(() => {
    const handleImageError = (event: Event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied === 'true') return;
      image.dataset.fallbackApplied = 'true';
      image.src = '/media-unavailable.svg';
      image.classList.add('media-fallback');
    };

    document.addEventListener('error', handleImageError, true);
    return () => document.removeEventListener('error', handleImageError, true);
  }, []);

  return (
    <CartProvider>

      <div className="page">

        <Header />

        <Menu />

        <main className="page-content">
          <Outlet />
        </main>

        <Footer />

        <Cart />

      </div>

    </CartProvider>
  );
}