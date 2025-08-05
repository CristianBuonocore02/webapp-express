const express = require('express')
const router = express.Router()
const moviesController = require('../controller/moviesController')
const reviewController = require('../controller/reviewController');

router.get('/', moviesController.index)
router.get('/:id/reviews', reviewController.getReviewsByMovieId);
router.get('/:id', moviesController.show)
router.post('/:id/reviews', reviewController.addReview);

module.exports = router