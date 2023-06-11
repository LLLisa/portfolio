import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { About, Inventory, RGS } from './views';
import { routeSelector } from '../utils';

export default () => {
  const page = useParams().page as string;

  const pageRouter = (selector: string) => {
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

  return (
    <main>
      <Link
        className="directionalNav navLeft"
        to={routeSelector('/' + page, -1)}
      >
        &lt;
      </Link>
      <article>{pageRouter(page)}</article>
      <Link
        className="directionalNav navRight"
        to={routeSelector('/' + page, 1)}
      >
        &gt;
      </Link>
    </main>
  );
};
