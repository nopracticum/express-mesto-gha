const router = require('express').Router();
const userRouter = require('./user');
const cardsRouter = require('./card');
const { createUser, login } = require('../controllers/user');
const auth = require('../middlewares/auth');
const { registerValidation, loginValidation } = require('../middlewares/validation');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', loginValidation, login);
router.post('/signup', registerValidation, createUser);
router.use(auth);
router.use('/cards', cardsRouter);
router.use('/users', userRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
