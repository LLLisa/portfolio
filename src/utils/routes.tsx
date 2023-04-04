import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Root, Main, Inventory, RGS } from '../components';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Main /> },
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
