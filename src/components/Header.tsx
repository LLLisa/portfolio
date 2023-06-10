import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <header>
      <div>Header</div>
      <nav>
        <Link to="/">about</Link>
        <Link to="/inventory">inventory</Link>
        <Link to="/rgs">rgs</Link>
      </nav>
    </header>
  );
};
