import axios from 'axios'

const api = axios.create({baseURL: "https://trevors-backend-js-project.onrender.com/api", timeout: 1000 })

export const getArticles = () => {
    return api.get("/articles").then((response) => {
        return response.data
    }).catch((err) => {
        console.log(err)
    })
}