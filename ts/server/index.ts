import app from './api';

const PORT = process.env.PORT || 1956;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
