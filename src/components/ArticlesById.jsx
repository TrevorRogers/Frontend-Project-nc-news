import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getArticlesById } from "../../api";

const ArticlesById = () => {
const { article_id } = useParams();
const [article, setArticle] = useState([]);

useEffect(() => {
    getArticlesById(article_id)
      .then(({article}) => {
        console.log(article)
      setArticle(article)
      })
      .catch((err) => {
      });
  }, [article_id]);
  
  return (
    <main>
              <h1>{article.title}</h1>
           <img src={article.article_img_url} alt="image of item" />
              <h3>By: {article.author}</h3>
              <p>created at: {article.created_at}</p>
              <p>{article.body}</p>
              <p>Topic: {article.topic}</p>
              <p>Votes: {article.votes}</p>
    </main>
  );
};

    


export default ArticlesById