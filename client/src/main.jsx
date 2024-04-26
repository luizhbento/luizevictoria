import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Presenca from './pages/Presenca.jsx';
import Presentes from './pages/Presentes.jsx';
import Viagem from './pages/Viagem.jsx';
import MainLayout from './layouts/MainLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/luizevictoria/',
    element: <MainLayout />,
    children: [
      {
        path: '/luizevictoria/',
        element: <Home />,
      },
      {
        path: '/luizevictoria/rsvp',
        element: <Presenca />,
      },
      {
        path: '/luizevictoria/presentes',
        element: <Presentes />,
      },
      {
        path: '/luizevictoria/viagem',
        element: <Viagem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
