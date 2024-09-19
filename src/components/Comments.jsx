import { useEffect, useState } from "react";
import { getComments } from "../../api";
import { Link, useParams } from "react-router-dom"

export const Comments = () => {

    const { article_id } = useParams();
    const [articleComments, setArticleComments] = useState([]);
    console.log(article_id)
    useEffect(() => {
        getComments(article_id)
          .then(({comments}) => {
          setArticleComments(comments)
         
          })
          .catch((err) => {
            console.log(err)
          });
      }, [article_id]);


  return (
    <main className="comments">
        <h2>Comments</h2>
                <div>
                  <Link className="addComment-btn" to={`/articles/${article_id}/comments`}>Add Comment</Link>
                </div>
       {articleComments.map((comment, comment_id) => {
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

