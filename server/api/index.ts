import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

const app = express();

const DIST_DIR = path.join(__dirname, '../../dist');

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
