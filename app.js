import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('welcome to home router hi');
});

app.listen(port, () => console.log(`server running on ${port}`));
