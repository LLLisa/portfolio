import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

import exampleRouter from './example';

const app = express();

app.use('/public', express.static(path.join(__dirname, '../../../public')));
app.use('/dist', express.static(path.join(__dirname, '../../../dist')));

app.use('/example', exampleRouter);

app.get('/', (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, '../../../public/index.html'));
  } catch (error) {
    next(error);
  }
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

export default app;
