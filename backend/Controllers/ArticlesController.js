const Articles = require('../Models/ArticlesModel')
const catchAsync = require('../Utils/catchAsync')
const AppError = require("../Utils/appError");


exports.getAllArticles = catchAsync(async (req, res) => {
    const articles = await Articles.find()
    res.status(200).json({
        status: 'success',
        quantity: articles.length,
        data: {
            articles
        }
    })
})


exports.createArticle = catchAsync(async (req, res) => {
    const articles = await Articles.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {
            articles
        }
    })
})

exports.getArticle = catchAsync(async (req, res, next) => {
    const articles = await Articles.findById(req.params.id)
    if (!articles) {

        return next(new AppError('找不到该ID的文档数据 ', 404))
    }
    res.status(200).json({
        status: 'success',
        data: {
            articles
        }
    })
})


exports.updateArticle = catchAsync(async (req, res, next) => {
    const newuArticles = await Articles.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true // 是否开启验证器
    })

    if (!newuArticles) {
        return next(new AppError('找不到该ID的文档数据 ', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            newuArticles
        }
    })
})

exports.deleteArticle = catchAsync(async (req, res, next) => {
    const doc = await Articles.findByIdAndRemove(req.params.id)
    if (!doc) {
        return next(new AppError('找不到该ID的文档数据 ', 404))
    }
    res.status(200).json({
        status: 'success',
        data: '删除成功！！'
    })
})