import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('welcome to CI/CD');
});

app.get('/home', (req, res) => {
  res.send('welcome to home route');
});

app.get('/login', (req, res) => {
  res.send('welcome to login route');
});

app.all('*', (req, res) => {
  res.send('Not found');
});

app.listen(port, () => console.log(`server running on ${port}`));
