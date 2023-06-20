import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { routeSelector } from '../utils';
import { generatePage, TPageData, about, inventory, rgs } from './views';

export default () => {
    const page = useParams().page as string;

    type PageKey = 'about' | 'inventory' | 'rgs';

    const pageConst: Record<PageKey, TPageData> = {
        about: about,
        inventory: inventory,
        rgs: rgs,
    };

    {
        console.log(pageConst[page as PageKey]);
    }
    return (
        <main>
            <Link className='directionalNav navLeft' to={'/' + routeSelector(page, -1)}>
                &lt;
            </Link>
            {/* <article>{generatePage(about)}</article> */}
            <article>{generatePage(pageConst[page as PageKey])}</article>
            <Link className='directionalNav navRight' to={routeSelector(page, 1)}>
                &gt;
            </Link>
        </main>
    );
};
