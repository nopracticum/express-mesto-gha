const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const app = express();
const router = require('./routes/index');
const error = require('./middlewares/error');

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(express.json());

app.use(router);
app.use(errors());
app.use(error);

app.listen(3000, () => {
// eslint-disable-next-line no-console
  console.log('App listening');
});
