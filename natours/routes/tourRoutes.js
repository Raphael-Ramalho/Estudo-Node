const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

router.param('id', tourController.checkId);

const middleware = (req, res, next) => {
  const hasName = req.body.name
  const hasPrice = req.body.price
  if(!hasName || !hasPrice) {
    res.status(400).json({
      status: 'error',
      message: 'Bad request'
    })
    return
  }
  next()
}

router.route('/').get(tourController.getTours).post(middleware, tourController.postTours);
router.route('/:id').get(tourController.getTour);

module.exports = router;
