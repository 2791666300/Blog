const express = require('express')


const ArticlesController = require('../Controllers/ArticlesController')
const uploadPhoto = require('../Utils/addImg')
const reviewRouter = require('./reviewRouter')

const router = express.Router()

router.use('/:articleId/reviews', reviewRouter)

router
   .route('/')
   .get(ArticlesController.getAllArticles)
   .post(ArticlesController.createArticle)

router
   .route('/addimg')
   .post(uploadPhoto.uploadPhoto, (req, res,) => {
      console.log(123123)
      res.json(req.file.path)
   })

router
   .route('/:id')
   .get(ArticlesController.getArticle)
   .patch(ArticlesController.updateArticle)
   .delete(ArticlesController.deleteArticle)

module.exports = router