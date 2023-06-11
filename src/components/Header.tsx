import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { routesArray } from '../utils';

export default () => {
  const page = useParams().page as string;

  const getWhichSelected = (linkName: string): string => {
    if (linkName === page) return 'currentPageLink';
    return '';
  };

  return (
    <header>
      <h1>Header</h1>
      <nav>
        {routesArray.map((route) => {
          return (
            <Link key={route} to={route} id={getWhichSelected(route.slice(1))}>
              {route.slice(1)}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
