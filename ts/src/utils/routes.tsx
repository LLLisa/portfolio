import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Root, Main } from '../components';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ path: '/', element: <Main /> }],
  },
]);
