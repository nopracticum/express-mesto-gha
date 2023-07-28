const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = require('./routes/index');

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use((req, res, next) => {
  req.user = { _id: '64c43f80017f746cbc9172de' };

  next();
});

app.listen(3000, () => {
  console.log('App listening');
});

app.use(express.json());

app.use('/', router);

app.use('/', (req, res) => {
  res.status(404).send({ message: 'Page not found' });
});
