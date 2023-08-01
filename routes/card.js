const router = require('express').Router();

const {
  createCard, getCards, deleteCard, putCardLike, deleteCardLike,
} = require('../controllers/card');

const { validateCreateCard, validateCardId } = require('../middlewares/validation');

router.get('/', getCards);
router.post('/', validateCreateCard, createCard);
router.delete('/:cardId', validateCardId, deleteCard);
router.put('/:cardId/likes', validateCardId, putCardLike);
router.delete('/:cardId/likes', validateCardId, deleteCardLike);

module.exports = router;
