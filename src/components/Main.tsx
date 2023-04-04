import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { About, Inventory, RGS } from './views';
import { routeSelector, navSelectionType } from '../utils';

export default () => {
  const page = useParams().page as string;

  const pageRouter = (selector: string) => {
    switch (selector) {
      case 'inventory':
        return <Inventory />;
      case 'rgs':
        return <RGS />;
      default:
        return <About />;
    }
  };
  const currentPath = window.location.pathname;

  const handleNav = (direction: navSelectionType) => {
    return routeSelector(currentPath, direction);
  };

  return (
    <main>
      <Link to={handleNav(-1)}>back</Link>
      {pageRouter(page)}
      <Link to={handleNav(1)}>forward</Link>
    </main>
  );
};
