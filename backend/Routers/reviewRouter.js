const express = require('express')

const authContoller = require('../Controllers/authController')
const reviewController = require('../Controllers/reviewController')


const router = express.Router({ mergeParams: true }) // 参数合并

router
    .route('/')
    .get(reviewController.getAllReviews)

    
router.use(authContoller.protect)

router
    .route('/')
    .post(authContoller.restrictTo('user', 'blogger'), reviewController.setTourUserIds, reviewController.creatReview)

router
    .route('/:id')
    .get(reviewController.getReview)
    .delete(authContoller.restrictTo('user', 'blogger'), reviewController.deleteReview)
    .patch(authContoller.restrictTo('user', 'blogger'), reviewController.updateReview)
module.exports = router