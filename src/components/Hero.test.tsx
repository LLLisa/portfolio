import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Hero from './Hero';
import { links } from '../data/content';

afterEach(cleanup);

describe('<Hero />', () => {
    it('renders the name and role', () => {
        render(<Hero />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Lisa Anne/);
        expect(screen.getByText(/Full-Stack Engineer/)).toBeInTheDocument();
    });

    it('exposes the primary calls to action', () => {
        render(<Hero />);
        expect(screen.getByRole('link', { name: /view my work/i })).toHaveAttribute(
            'href',
            '#work'
        );
        expect(screen.getByRole('link', { name: /résumé/i })).toHaveAttribute(
            'href',
            links.resume
        );
    });
});
