import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getArticlesById, postVote } from "../../api";
import { Comments } from "./Comments";


const ArticlesById = () => {
const { article_id } = useParams();
const [article, setArticle] = useState([]);
const [vote, setVote] = useState(1)

const newVote = {inc_votes: vote}

useEffect(() => {
    getArticlesById(article_id)
      .then(({article}) => {
      setArticle(article)
      })
      .catch((err) => {
      });
  }, [article_id]);

  function handleVote(e) {
    e.preventDefault()
      setVote(vote + 1)
      console.log(vote)
    postVote(newVote, article_id).then(()=>{
        window.location.reload()
    }).catch((err)=> {
        console.log(err)
    })
  }
  
  return (
    <>
    <main className="article">
              <h1>{article.title}</h1>
           <img src={article.article_img_url} alt="image of item" />
              <h3>By: {article.author}</h3>
              <p>created at: {article.created_at}</p>
              <p>{article.body}</p>
              <p>Topic: {article.topic}</p>
              <p>Votes: {article.votes}</p>
              <button className="vote-btn" onClick={handleVote}>Add Vote Here</button>
    </main>
        <Comments />
                </>
                
  );
};

    


export default ArticlesById