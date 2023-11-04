import axios from 'axios'

export const GetAllArticles = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://42.194.140.99:80/api/v1/articles'
        })
        return res.data.data.articles
    } catch (err) {
        console.log(err)
    }
}

export const UpdateArticle = async ({ articleDate, path, type }) => {

    try {
        await axios({
            method: 'PATCH',
            url: `http://42.194.140.99:80/api/v1/articles/${path}`,
            data: { [type]: articleDate }
        })

    } catch (error) {
        console.log(error)
    }
}

