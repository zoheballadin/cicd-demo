import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => console.log(`server running on ${port}`));
