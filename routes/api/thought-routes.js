const router = require('express').Router();
// Import functions from thought-controller
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

//Routes for /api/thoughts
router
  .route('/').get(getAllThoughts);

//Routes for /api/thoughts/<userId>
router
  .route('/:userId')
  .post(createThought);

//Routes for /api/thoughts/<thoughtId>
router
  .route('/:thoughtId')
  .put(updateThought)
  .get(getThoughtById);

//Routes for /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .delete(deleteThought);

// Routes for /api/thoughts/<thoughtId>/reactions
router
  .route('/:thoughtId/reactions')
  .put(createReaction)

//Routes for /api/thoughts/<thoughtId>/reactions/<reactionId>
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;