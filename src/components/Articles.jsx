import { useEffect, useState } from "react";
import { getArticles } from "../../api";

const Articles = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
          .then(({articles}) => {
          setArticles(articles)
          })
          .catch((err) => {
          });
      }, []);

  return (
    <main>
        {articles.map((article, i) => {
            return (
            <section key={i}>
                <img src={article?.img_url} alt="image of item" />
              <h2>{article.title}</h2>
              <p>{article.author}</p>
              <p>{article.topic}</p>
              <p>${article.votes}</p>
            </section>
            )
        })}

    </main>
  )
}

export default Articles