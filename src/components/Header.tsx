import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default () => {
  const page = useParams().page as string;

  console.log(page);

  return (
    <header>
      <h1>Header</h1>
      <nav>
        <Link to="/">about</Link>
        <Link to="/inventory">inventory</Link>
        <Link to="/rgs">rgs</Link>
      </nav>
    </header>
  );
};
