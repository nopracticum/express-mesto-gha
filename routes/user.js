const router = require('express').Router();

const {
  createUser, getUsers, getUserById, updateUser, updateUserAvatar,
} = require('../controllers/user');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);

router.patch('/me', updateUser);
router.patch('/me/avatar', updateUserAvatar);

module.exports = router;
