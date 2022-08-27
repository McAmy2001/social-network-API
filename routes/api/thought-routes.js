const router = require('express').Router();
// Import functions from thought-controller
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought
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

module.exports = router;