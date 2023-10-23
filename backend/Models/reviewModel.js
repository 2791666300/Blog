const mongoose = require('mongoose')


const reviewSchema = mongoose.Schema({
    review: {
        type: String,
        required: [true, "不能没有评论哟！！"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    thumbsUps: [
        {
            type: String
        }
    ],
    comments: [
        {
            review: {
                type: String,
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
            thumbsUps: [
                {
                    type: String
                }
            ],
            commentUser: {},
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        required: [true, "评论应该有用户！！"]
    },
    article: {
        type: mongoose.Schema.ObjectId,
        ref: 'articles',
        required: [true, "评论不能少了对应的文章！！"]
    }
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
)


reviewSchema.index({ article: 1, user: 1 });

// 在find... 之前对 path 值进行填充
reviewSchema.pre(/^find/, function (next) {

    this.populate({
        path: 'user',
        select: 'name photo position createdAt',
    })
    next()
})

reviewSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'article',
        select: 'primaryTitle'
    })
    next()
})


const Review = mongoose.model('reviews', reviewSchema)

module.exports = Review