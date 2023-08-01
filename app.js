const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const { PORT = 3000 } = process.env;

const app = express();
const router = require('./routes/index');
const error = require('./middlewares/error');

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(express.json());

app.use(router);
app.use(errors());
app.use(error);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`App listening: ${PORT}`));
