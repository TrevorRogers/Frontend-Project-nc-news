import { useState } from "react";
import { postComment } from "../../api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"

const AddComment = ({articleComments, setArticleComments}) => {

    const [commentBody, setCommentBody] = useState("")
    const [usernames, setUsername] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(true)
    const navigate = useNavigate();
    const { article_id } = useParams();

    function handleCommentInput(e) {
        setCommentBody(e.target.value);
    }

    function handleUserInput(e) {
        setUsername(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newComment = {username: usernames, body: commentBody}
        postComment(newComment, article_id).then(()=>{
            setArticleComments(newComment, articleComments)
            setIsSubmitting(true)
            navigate("/")
            console.log(article_id)
        }).catch((err)=> {
            console.log(err)
            setIsSubmitting(false)
        
        })
    }

    if (!isSubmitting) {
        return (
            <p>comment failed to send</p>
        )
    }

    
  return (
    <main>
    <div>
        <h2>Add Comment</h2>
        <form method="post" onSubmit={handleSubmit} className="add-comment_form">

        <input type="text" 
      
        onChange={handleUserInput}
        placeholder="username"/>

        <input type="text"
        onChange={handleCommentInput}
     
        placeholder="write comment here" />
        <button>Submit</button>
        </form>
    </div>
</main>
  )
}

export default AddComment