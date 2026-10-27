import { createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import Main from './pages/Main';
import Aboutus from './components/Aboutus';
import Garantii from './components/Garantii';
import Kontakty from './components/Kontakty';
import Dostavka from './components/Dostavka';
import Catalog from './components/Catalog/index.tsx';
import PopularCatalog from './components/PopularCatalog';
import PremiumCatalog from './components/PremiumCatalog/index.tsx';
import HealfCatalog from './components/HealfCatalog/index.tsx';
import ExoticCatalog from './components/ExoticCatalog/index.tsx';
import ProductPage from './components/ProductPage/index.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        element: <Main />,
      },

      {
        path: 'o-nas',
        element: <Aboutus />,
      },

      {
        path: 'catalog',
        element: <Catalog />,
      },

      {
        path: 'dostavka',
        element: <Dostavka />,
      },

      {
        path: 'garantii',
        element: <Garantii />,
      },

      {
        path: 'kontakty',
        element: <Kontakty />,
      },

      {
        path: 'catalog/popular',
        element: <PopularCatalog />,
      },

      {
        path: 'catalog/premium',
        element: <PremiumCatalog />
      },

      {
        path: 'catalog/healf',
        element: <HealfCatalog />,
      },

      {
        path: 'catalog/exotic',
        element: <ExoticCatalog />
      },

      {
        path: 'catalog/:category/:id',
        element: <ProductPage />,
      }
    ],
  },
]);