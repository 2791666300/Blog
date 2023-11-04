import axios from 'axios'

export const GetAllCurrentReviews = async (id) => {
    try {
        const res = await axios({
            method: 'GET',
            url: `http://42.194.140.99:80/api/v1/articles/${id}/reviews`
        })
        return res.data.data.data
    } catch (err) {
        console.log(err)
    }
}

export const CreateReview = async (data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `http://42.194.140.99:80/api/v1/articles/${data.articleId}/reviews`,
            data: { review: data.review, cookie: window.document.cookie }
        })

        return res.data.data
    }
    catch (error) {
        console.log(error)
    }
}

export const UpdateReview = async (data) => {
    try {
        const res = await axios({
            method: 'PATCH',
            params: {
                cookie: window.document.cookie
            },
            url: `http://42.194.140.99:80/api/v1/reviews/${data.reviewId}`,
            data: data
        })

        return res.data.data

    } catch (error) {
        console.log(error)
    }
}

export const GetAllReviews = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://42.194.140.99:80/api/v1/reviews/'
        })

        return res.data.data.data

    } catch (error) {
        console.log(error)
    }
}