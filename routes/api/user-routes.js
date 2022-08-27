const router = require('express').Router();
// Import functions from user-controller
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/user-controller');

// Routes for /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Routes for /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  // Routes for /api/:id/friends/:friendId
  router
    .route('/:id/friends/:friendId')
    .put(addFriend)
    .delete(deleteFriend);

  module.exports = router;


