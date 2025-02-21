import axios from 'axios'

const api = axios.create({baseURL: "https://trevors-backend-js-project.onrender.com/api", timeout: 1000 })

export const getArticles = (topicChoosen, sortBy) => {
    return api.get("/articles", { params: { topic: topicChoosen, sort_by: sortBy } }).then((response) => {
        return response.data
    })
}

export const getArticlesById = (article_id) => {
    return api.get(`/articles/${article_id}`, { params: { article_id: article_id } }).then((response) => {
        return response.data
    })
}

export const getComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`, { params: { article_id: article_id } }).then((response) => {
        return response.data
    })
}

export const updateVote = (newVote, article_id) => {
    return api.patch(`/articles/${article_id}`, newVote).then((response)=>{
        return response.data
    })
}

export const postComment = (newComment, article_id) => {
    return api.post(`/articles/${article_id}/comments`, newComment).then((response)=>{
        console.log(response.data)
        return response.data
    })
}

export const deleteComment = (comment_id) => {
    console.log(comment_id)
    return api.delete(`/comments/${comment_id}`, comment_id).then(()=>{
        console.log("item removed")
    })
}