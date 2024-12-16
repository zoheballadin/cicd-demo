import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('welcome to hello world router');
});

app.listen(port, () => console.log(`server running on ${port}`));
