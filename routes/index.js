const router = require('express').Router();

const userRouter = require('./user');
const cardsRouter = require('./card');

router.use('/cards', cardsRouter);
router.use('/users', userRouter);

module.exports = router;
