import React, { useEffect, useState } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { routeSelector, routesArray, navSelectionType } from '../utils';

export default () => {
  // const { page } = useParams();

  // console.log(page);
  const currentPath = window.location.pathname;

  const handleNav = (direction: navSelectionType) => {
    return routeSelector(currentPath, direction);
  };

  return (
    <main>
      <Link to={handleNav(-1)}>back</Link>
      <Outlet />
      <Link to={handleNav(1)}>forward</Link>
    </main>
  );
};
