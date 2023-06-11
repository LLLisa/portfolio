import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { routeSelector, pageRouter } from '../utils';

export default () => {
  const page = useParams().page as string;

  return (
    <main>
      <Link className="directionalNav navLeft" to={routeSelector('/' + page, -1)}>
        &lt;
      </Link>
      <article>{pageRouter(page)}</article>
      <Link className="directionalNav navRight" to={routeSelector('/' + page, 1)}>
        &gt;
      </Link>
    </main>
  );
};
