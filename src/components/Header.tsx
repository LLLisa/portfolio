import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
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
