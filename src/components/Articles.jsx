import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { Link } from "react-router-dom";

const Articles = ({articles, setArticles}) => {

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
        {articles.map((article, article_id) => {
            return (
            <section key={article_id}>
                <img src={article.article_img_url} alt="image of item" />
              <h2>{article.title}</h2>
              <p>By: {article.author}</p>
              <p>Topic: {article.topic}</p>
              <p>Votes: {article.votes}</p>
              <p>ID {article.article_id}</p>
            <Link className="Article-btn" to={`/article/${article.article_id}`}>
            View Article
            </Link>
            </section>
            )
        })}

    </main>
  )
}

export default Articles