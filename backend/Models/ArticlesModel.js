const mongoose = require('mongoose')
const slugify = require('slugify')

const articlesSchema = new mongoose.Schema({
    primaryTitle: {
        type: String,
        required: [true, '必须要填写主标题'],
        unique: true,
    },
    slug: String,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        required: [true, "文章应该有用户！！"]
    },
    article: {
        type: String,
        required: [true, "文章应该有内容的！！"]
    },
    publication: {
        type: Date,
        default: Date.now
    },
    introduction: {
        type: String,
        default: '没有简介'
    },
    label: [String],
    clicked: {
        type: Number,
        default: 0
    },
    thumbsUps: [
        {
            type: String
        }
    ],
    collections: [
        {
            type: String
        }

    ],
    category: [String],
    coverImg: String,
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
)

articlesSchema.pre('save', function (next) {
    this.slug = slugify(this.id, { lower: true }) // this 关键字将指向当前要保存的文档(document middleware)
    next()
})

// 在find... 之前对 path 值进行填充
articlesSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'user',
        select: 'name',
    })
    next()
})

const Articles = mongoose.model('articles', articlesSchema)

module.exports = Articles