import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

const app = express();

const DIST_DIR = path.join(__dirname, '../../dist');

// Trust Heroku's router so req.protocol / x-forwarded-proto are accurate.
app.enable('trust proxy');

const CANONICAL_HOST = 'www.lisaaknox.com';

// Canonicalize in production: force HTTPS and redirect the bare apex domain to
// www so search engines see a single canonical origin. Heroku terminates TLS
// and forwards the original scheme via x-forwarded-proto.
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        const host = req.headers.host || '';
        const insecure = req.headers['x-forwarded-proto'] !== 'https';
        const apex = host === 'lisaaknox.com';
        if (insecure || apex) {
            const target = apex ? CANONICAL_HOST : host;
            return res.redirect(301, `https://${target}${req.originalUrl}`);
        }
    }
    // Tell browsers to stick to HTTPS for the next year.
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next();
});

// Serve the Vite production build (hashed JS/CSS assets, favicon, etc.)
app.use(express.static(DIST_DIR));

// SPA fallback — any non-asset route returns the app shell.
app.get('*', (req, res, next) => {
    try {
        res.sendFile(path.join(DIST_DIR, 'index.html'));
    } catch (error) {
        next(error);
    }
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});

export default app;
