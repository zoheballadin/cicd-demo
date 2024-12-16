import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('welcome to CI/CD');
});

app.get('/home', (req, res) => {
  res.send('welcome to home');
});

app.get('/login', (req, res) => {
  res.send('welcome to login');
});

app.listen(port, () => console.log(`server running on ${port}`));
