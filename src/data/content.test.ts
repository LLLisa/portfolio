import { describe, it, expect } from 'vitest';
import { profile, links, stats, experience, projects, skills, siteUrl } from './content';

const HTTPS = /^https:\/\//;
const HEX = /^#[0-9a-f]{6}$/i;

describe('profile', () => {
    it('has the core identity fields', () => {
        expect(profile.name).toBe('Lisa Anne Knox');
        expect(profile.role).toBeTruthy();
        expect(profile.location).toBeTruthy();
        expect(profile.intro.length).toBeGreaterThan(0);
    });

    it('uses a valid email address', () => {
        expect(profile.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    });
});

describe('links', () => {
    it('points external profiles at https URLs', () => {
        expect(links.github).toMatch(HTTPS);
        expect(links.linkedin).toMatch(HTTPS);
        expect(links.npm).toMatch(HTTPS);
    });

    it('uses a mailto: link that matches the profile email', () => {
        expect(links.email).toBe(`mailto:${profile.email}`);
    });

    it('serves the résumé as a local PDF', () => {
        expect(links.resume).toMatch(/\.pdf$/);
        expect(links.resume.startsWith('/')).toBe(true);
    });

    it('canonical site URL is https and has no trailing slash', () => {
        expect(siteUrl).toMatch(HTTPS);
        expect(siteUrl.endsWith('/')).toBe(false);
    });
});

describe('stats', () => {
    it('every stat has a value and a label', () => {
        expect(stats.length).toBeGreaterThan(0);
        for (const s of stats) {
            expect(s.value.trim()).toBeTruthy();
            expect(s.label.trim()).toBeTruthy();
        }
    });
});

describe('experience', () => {
    it('every role is complete', () => {
        expect(experience.length).toBeGreaterThan(0);
        for (const job of experience) {
            expect(job.company).toBeTruthy();
            expect(job.role).toBeTruthy();
            expect(job.period).toMatch(/\d{4}/);
            expect(job.points.length).toBeGreaterThan(0);
            job.points.forEach((p) => expect(p.trim()).toBeTruthy());
        }
    });
});

describe('projects', () => {
    it('every project is well-formed', () => {
        expect(projects.length).toBeGreaterThan(0);
        for (const p of projects) {
            expect(p.name).toBeTruthy();
            expect(p.blurb.length).toBeGreaterThan(20);
            expect(p.tags.length).toBeGreaterThan(0);
            if (p.accent) expect(p.accent).toMatch(HEX);
            if (p.href) expect(p.href).toMatch(HTTPS);
            if (p.repo) expect(p.repo).toMatch(HTTPS);
            // A project should be reachable somewhere.
            expect(p.href || p.repo).toBeTruthy();
        }
    });

    it('has at least one featured project', () => {
        expect(projects.some((p) => p.featured)).toBe(true);
    });

    it('uses unique project names', () => {
        const names = projects.map((p) => p.name);
        expect(new Set(names).size).toBe(names.length);
    });
});

describe('skills', () => {
    it('every group has a label and items', () => {
        expect(skills.length).toBeGreaterThan(0);
        for (const g of skills) {
            expect(g.label).toBeTruthy();
            expect(g.items.length).toBeGreaterThan(0);
        }
    });
});
