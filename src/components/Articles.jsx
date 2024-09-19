import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { Link, useSearchParams } from "react-router-dom";

const Articles = ({articles, setArticles}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const topicsQuery = searchParams.get("topic")
    const [currentTopic, setCurrentTopic] = useState("")


    useEffect(() => {
        getArticles(topicsQuery)
          .then(({articles}) => {
          setArticles(articles)
          setCurrentTopic(topicsQuery)
          })
          .catch((err) => {
            console.log('in catch', err)
          });
      }, [topicsQuery]);

      function topicSort(topicChoosen) {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("topic", topicChoosen);
        setSearchParams(newParams);
        setCurrentTopic(topicChoosen);
      }

  return (
    <main className="articles">
        <select name="" id="" onChange={(event)=> {
            topicSort(event.target.value)
        }}>Topics 
        <option>All</option>
        {articles.map((article, i) => {
          return (
            <option key={i} value={article.topic}>
                {article.topic}
            </option>
          );
        })}
        </select>
        {articles.map((article, article_id) => {
            return (
            <section key={article_id} >
                <img src={article.article_img_url} alt="image of item" />
              <h2>{article.title}</h2>
              <p>By: {article.author}</p>
              <p>Topic: {article.topic}</p>
              <p>Votes: {article.votes}</p>
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