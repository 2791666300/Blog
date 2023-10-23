const express = require('express')

const userControllers = require('../Controllers/userController')
const authContoller = require('../Controllers/authController')

const router = express.Router()

router.post('/signup', authContoller.signup)
router.post('/login', authContoller.login)
router.get('/logout', authContoller.logout)
// router.post('/forgotPassword', authContoller.forgotPassword)
// router.patch('/resetPassword/:token', authContoller.resetPassword)

// 限制或保护对之后的路由， 利用中间件按顺序执行原理
router.use(authContoller.protect)

router.patch('/updatePassword', authContoller.updatePassword)

// router.patch('/updateMe', userControllers.updateMe)
router.patch('/updateMe', userControllers.uploadUserPhoto, userControllers.resizeUserPhoto, userControllers.updateMe)

router.delete('/deleteMe', userControllers.deleteMe)

router.get('/Me', userControllers.getMe, userControllers.getUser)

// 之后的路由只允许 blogger( 管理员 ) 用户执行
router.use(authContoller.restrictTo('blogger'))

router
   .route('/')
   .get(userControllers.getAllUsers)
   .post(userControllers.creatUser)
   

router
   .route('/:id')
   .get(userControllers.getUser)
   .patch(userControllers.updateUser)
   .delete(userControllers.deleteUser)
//    .delete(authContoller.protect, authContoller.restrictTo('admin'), userControllers.deleteUser)

module.exports = router