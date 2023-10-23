const Review = require('../Models/reviewModel')


const factory = require('./handlerFactory')



// 多出来的部分   可以创一个中间件

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.article) req.body.article = req.params.articleId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

// 所有
exports.getAllReviews = factory.getAll(Review)


// 查询
exports.getReview = factory.getOne(Review)

// 新建
exports.creatReview = factory.createOne(Review)

// 更新
exports.updateReview = factory.updateOne(Review)

// 删除
exports.deleteReview = factory.deleteOne(Review)