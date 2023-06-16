import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { routeSelector } from '../utils';
import { generatePage, TPageData, about, inventory, rgs } from './views';

export default () => {
    const page = useParams().page as string;

    // const pageConst: Record<string, TPageData> = {
    //     about,
    //     inventory,
    //     rgs,
    // };

    return (
        <main>
            <Link className='directionalNav navLeft' to={'/' + routeSelector(page, -1)}>
                &lt;
            </Link>
            <article>{generatePage(about)}</article>
            {/* <article>{generatePage(pageConst[page])}</article> */}
            <Link className='directionalNav navRight' to={routeSelector(page, 1)}>
                &gt;
            </Link>
        </main>
    );
};
