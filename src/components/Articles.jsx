import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { Link, useSearchParams } from "react-router-dom";

const Articles = ({articles, setArticles}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const topicsQuery = searchParams.get("topic");
    const sortByQuery = searchParams.get("sort_by");
    const [currentTopic, setCurrentTopic] = useState("");
    const [currentSortBy, setCurrentSortBy] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        getArticles(topicsQuery, sortByQuery)
          .then(({articles}) => {
          setArticles(articles)
          setCurrentTopic(topicsQuery)
          setCurrentSortBy(sortByQuery)
          setIsLoading(false)
          setIsError(false)
          })
          .catch((err) => {
            setIsError(true)
            setIsLoading(false)
            console.log('in catch', err)
          });
      }, [topicsQuery, sortByQuery]);

      function topicSort(topicChoosen) {
        if(topicsQuery === "All") {
            console.log("here")
        } else {
            const newParams = new URLSearchParams(searchParams);
            newParams.set("topic", topicChoosen);
            setSearchParams(newParams);
            setCurrentTopic(topicChoosen);
        }
      }
      function sortBySort(sortBy) {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("sort_by", sortBy);
        setSearchParams(newParams);
        setCurrentSortBy(sortBy);
      }

      if (isError) {
        return (
            <p>Not Found</p>
        )
      }

      if (isLoading) {
        return (
         <p>Loading</p>
        );
      }

  return (
    <main className="articles">
        <p>Topics</p>
        <select name="" id="" onChange={(event)=> {
            topicSort(event.target.value)
        }}>Topics 
        <option>All</option>
        <option>football</option>
        <option>coding</option>
        <option>cooking</option>
       
        </select>
        <p>Sort articles
        </p>
        <select name="" id="" onChange={(event)=> {
            sortBySort(event.target.value)
        }}>Topics 
        <option>All</option>
        <option>title</option>
        <option>topic</option>
        <option>author</option>
        <option>created_at</option>
        <option>votes</option>
        <option>comment_count</option>
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