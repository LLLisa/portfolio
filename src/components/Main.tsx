import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { routeSelector } from '../utils';
import { generatePage, TPageData, about, inventory, rgs } from './views';
import { useSwitchTransition } from 'transition-hook';

export default () => {
    const page = useParams().page as PageKey;
    if (!page) return <Navigate to='about' />;

    const transition = useSwitchTransition(page, 100, 'out-in');
    const [direction, setDirection] = useState<TDirection>('left');

    type PageKey = 'about' | 'inventory' | 'rgs';
    type TDirection = 'left' | 'right';

    const pageConst: Record<PageKey, TPageData> = {
        about: about,
        inventory: inventory,
        rgs: rgs,
    };

    return (
        <main>
            <Link
                className='directionalNav navLeft'
                to={routeSelector(page, -1)}
                onClick={() => setDirection('left')}
                onMouseDown={(ev) => ev.preventDefault()}
            >
                &lt;
            </Link>
            {transition((state, stage) => (
                <section
                    id='mainContentSection'
                    style={{
                        transition: '100ms',
                        opacity: stage === 'enter' ? 1 : 0,
                        transform: {
                            from: `translateX(${direction === 'left' ? '5' : '-5'}%)`,
                            enter: 'translateX(0%)',
                            leave: `translateX(${direction === 'right' ? '5' : '-5'}%)`,
                        }[stage],
                    }}
                >
                    <article>{generatePage(pageConst[state])}</article>
                </section>
            ))}
            <Link
                className='directionalNav navRight'
                to={routeSelector(page, 1)}
                onClick={() => setDirection('right')}
                onMouseDown={(ev) => ev.preventDefault()}
            >
                &gt;
            </Link>
        </main>
    );
};
