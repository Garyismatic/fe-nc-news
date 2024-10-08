import { useEffect, useState } from "react";
import Articles from "./Articles";
import { getArticles } from "../Api";
import { Routes, Route, useSearchParams } from "react-router-dom";
import ArticleById from "./ArticleById";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Loading.json";
import ErrorPage from "./ErrorPage";

function Feed({ topic, setTopic, sort, setSort }) {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const sortQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  useEffect(() => {
    if (topicQuery !== null) {
      setTopic(topicQuery);
    }
    if (sortQuery !== null) {
      setSort(sortQuery);
    }
    getArticles(topicQuery, sortQuery, orderQuery)
      .then((articlesArray) => {
        setArticles(articlesArray);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topicQuery, sortQuery, orderQuery]);

  if (isLoading) {
    return <Lottie animationData={loadingAnimation} loop={true} />;
  }

  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/"
          element={
            <Articles
              articles={articles}
              topic={topic}
              setTopic={setTopic}
              sort={sort}
              setSort={setSort}
            />
          }
        />
        <Route
          path="/articles"
          element={
            <Articles
              articles={articles}
              topic={topic}
              setTopic={setTopic}
              sort={sort}
              setSort={setSort}
            />
          }
        />
        <Route
          path="/articles/:article_id"
          element={
            <ArticleById
              article={article}
              setArticle={setArticle}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
      </Routes>
    </>
  );
}

export default Feed;
