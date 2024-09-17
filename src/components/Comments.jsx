import { useEffect, useState } from "react";
import { getComments } from "../../api";
import { useParams } from "react-router-dom"

export const Comments = () => {

    const { article_id } = useParams()
    const [articleComments, setArticleComments] = useState([])

    useEffect(() => {
        getComments(article_id)
          .then(({comments}) => {
            console.log(comments)
          setArticleComments(comments)
          })
          .catch((err) => {
            console.log(err)
          });
      }, [article_id]);


  return (
    <main className="comments">
        <h2>Comments</h2>
       {articleComments.map((comment, comment_id) => {
        console.log("here")
            return (
            <section key={comment_id} className="comments">
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
                <p>{comment.created_at}</p>
                <p>{comment.votes}</p>
            </section>
            )
        })}
    </main>
  )
}

