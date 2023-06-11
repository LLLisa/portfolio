import React from 'react';
import { Link, useParams } from 'react-router-dom';

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
        <Link to="/about" id={getWhichSelected('about')}>
          about
        </Link>
        <Link to="/inventory" id={getWhichSelected('inventory')}>
          inventory
        </Link>
        <Link to="/rgs" id={getWhichSelected('rgs')}>
          rgs
        </Link>
      </nav>
    </header>
  );
};
