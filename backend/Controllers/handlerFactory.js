const catchAsync = require('../Utils/catchAsync')
const AppError = require('../Utils/appError')
const AIPFeatures = require('../Utils/apiFeatures')


exports.deleteOne = Model => catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndRemove(req.params.id)

    if (!doc) {
        return next(new AppError('No doc found with that ID ', 404))
    }

    res.status(204).json({
        status: 'success',
        data: null
    })
})


exports.updateOne = Model => catchAsync(async (req, res, next) => {

    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true // 是否开启验证器
    })

    if (!doc) {
        return next(new AppError('No doc found with that ID ', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            data: doc
        }
    })
})

exports.createOne = Model => catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body)

    res.status(201).json({
        status: 'success',
        data: {
            data: doc
        }
    })
})

exports.getOne = (Model, popOptions) => catchAsync(async (req, res, next) => {

    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions)
    const doc = await query

    if (!doc) {
        return next(new AppError('No doc found with that ID ', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            data: doc
        }
    })
})

exports.getAll = Model => catchAsync(async (req, res, next) => {

    let filter = {}
    if (req.params.articleId) filter = { article: req.params.articleId }
    const features = new AIPFeatures(Model.find(filter), req.query).filter().sort().limitFields().paginate();


    // const doc = await features.query.explain(); // .explain() 方法返回查询过程
    const doc = await features.query;

    // send reponse
    res.status(200).json({
        status: 'success',
        resquestedAt: req.requestTime,
        results: doc.length,
        data: {
            data: doc
        }
    })
})
