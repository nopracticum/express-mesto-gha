const router = require('express').Router();
const {
  createCard, getCards, deleteCard, putCardLike, deleteCardLike,
} = require('../controllers/card');

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', putCardLike);
router.delete('/:cardId/likes', deleteCardLike);

module.exports = router;
