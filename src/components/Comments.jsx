import { useEffect, useState } from "react";
import { getComments, deleteComment} from "../../api";
import { Link, useParams } from "react-router-dom"
import { format } from 'date-fns'

export const Comments = () => {

    const { article_id } = useParams();
    const [articleComments, setArticleComments] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false)


    useEffect(() => {
        getComments(article_id)
          .then(({comments}) => {
            console.log(comments)
          setArticleComments(comments)
         console.log(comments.length)
          })
          .catch((err) => {
            console.log(err)
          });
      }, [article_id]);

      function removeComment(comment_id) {
        setIsDeleting(true)
        deleteComment(comment_id).then(() => {
          setIsDeleting(false)
          window.location.reload();
        }).catch(()=> {
          console.log("in catch")
        });
      }

      if (isDeleting) {
        return(
          <p>comment is being deleted...</p>
        )
      }

//add user lgoin to make delete better.
  return (
    <main className="comments">
        <h2>Comments</h2>
                <div>
                  <Link className="addComment-btn" to={`/articles/${article_id}/comments`}>Add Comment</Link>
                </div>
       {articleComments.map((comment, comment_id) => {
        const formattedDate = format(new Date(comment.created_at), 'dd/MM/yyyy');
        const formattedTime = format(new Date('2024-09-19T10:31:00Z'), 'HH:mm:ss');
            return (
            <section key={comment_id} className="comments">
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
                <p>{formattedDate}</p>
                <p>{formattedTime}</p>
                <p>{comment.votes}</p>
              {comment.comment_id > 312  ? (
  <button className="delete-btn" onClick={()=> removeComment(comment.comment_id)}>
    Delete Comment
  </button> ) : (
    <p></p>
  )}
            </section>
             
            )
        })}
    </main>
  )
}

