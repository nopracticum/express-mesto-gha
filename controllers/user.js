const User = require('../models/user');

const ERROR_BAD_REQUEST = 400;
const ERROR_NOT_FOUND = 404;
const ERROR_DEFAULT = 500;

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(ERROR_BAD_REQUEST).send({ message: 'Переданы некорректные данные при создании пользователя.' });
      } else {
        res.status(ERROR_DEFAULT).send({ message: 'На сервере произошла ошибка.' });
      }
    });
};

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(ERROR_DEFAULT).send({ message: 'На сервере произошла ошибка.' }));
};

const getUserById = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => {
      if (!user) {
        res.status(ERROR_NOT_FOUND).send({ message: 'Пользователь по указанному _id не найден.' });
      } else {
        res.send(user);
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(ERROR_BAD_REQUEST).send({ message: 'Переданы некорректные данные.' });
      } else {
        res.status(ERROR_DEFAULT).send({ message: 'На сервере произошла ошибкa.' });
      }
    });
};

const updateUserFields = (req, res, updateFields) => {
  User.findByIdAndUpdate(
    req.user._id,
    updateFields,
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(ERROR_BAD_REQUEST).send({ message: 'Переданы некорректные данные.' });
      } else {
        res.status(ERROR_DEFAULT).send({ message: 'На сервере произошла ошибка.' });
      }
    });
};

const updateUser = (req, res) => {
  const { name, about } = req.body;
  updateUserFields(req, res, { name, about });
};

const updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  updateUserFields(req, res, { avatar });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  updateUserAvatar,
};
