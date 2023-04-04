import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Root } from '../components';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ path: '/:page', element: <Outlet /> }],
  },
]);
