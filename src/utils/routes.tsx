import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Root, About, Inventory, RGS, Main } from '../components';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // { path: '/:page', element: <Main /> },
      { path: '/about', element: <About /> },
      {
        path: '/inventory',
        element: <Inventory />,
      },
      {
        path: '/rgs',
        element: <RGS />,
      },
    ],
  },
]);
