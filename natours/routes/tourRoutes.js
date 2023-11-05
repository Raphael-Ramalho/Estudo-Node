const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

router.param('id', tourController.checkId);

router.route('/').get(tourController.getTours).post(tourController.postTours);
router.route('/:id').get(tourController.getTour);

module.exports = router;
