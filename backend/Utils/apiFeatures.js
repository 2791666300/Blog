class AIPFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString
    }

    filter() {
        // 1）简单过滤
        const queryOjb = { ...this.queryString } // ...三个点实现复制
        // 排除或者替换的字段
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryOjb[el])

        // 2）高级过滤 advanced Filtering 有大于小于等需求时 http://42.194.140.99:80/api/v1/tours?code=ABW& id[gt]=1
        // req.query 返回{ code: 'ABW', id: { gt: '1' } } 所以要在gt前加 $ 符号 
        let queryStr = JSON.stringify(queryOjb);
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`)
        // console.log(JSON.parse(queryStr))

        this.query = this.query.find(JSON.parse(queryStr))

        return this;
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
            // sort('-id continent_id')
        }
        else {
            this.query = this.query.sort('-id')// - 代表反向
        }
        return this;
    }

    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');

            this.query = this.query.select(fields)
        } else {
            this.query = this.query.select('-__v')
        }

        return this;
    }

    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 100;
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit)
        return this;

    }

}

module.exports = AIPFeatures;