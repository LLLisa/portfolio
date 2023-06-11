import React from 'react';
import { About, Inventory, RGS } from '../components';
import { Navigate } from 'react-router-dom';

export default (selector: string) => {
  switch (selector) {
    case 'inventory':
      return <Inventory />;
    case 'rgs':
      return <RGS />;
    case 'about':
      return <About />;
    default:
      return <Navigate to={'/about'} />;
  }
};
