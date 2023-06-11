import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default () => {
  const page = useParams().page as string;

  const getWhichSelected = (thisLink: string): string => {
    // console.log(thisLink, page);
    if (thisLink === page) return 'currentPageLink';
    return '';
  };

  return (
    <header>
      <h1>Header</h1>
      <nav>
        <Link to="/" className={getWhichSelected('about')}>
          about
        </Link>
        <Link to="/inventory" className={getWhichSelected('inventory')}>
          inventory
        </Link>
        <Link to="/rgs" className={getWhichSelected('rgs')}>
          rgs
        </Link>
      </nav>
    </header>
  );
};
