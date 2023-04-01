import app from './api';

const PORT = process.env.port || 1956;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
