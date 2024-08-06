import { useEffect, useState } from "react";
import Articles from "./Articles";
import { getArticles } from "../Api";
import { Routes, Route } from "react-router-dom";
import ArticleById from "./ArticleById";

function Feed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesArray) => {
      setArticles(articlesArray);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Articles articles={articles} />} />
        <Route path="/articles" element={<Articles articles={articles} />} />
        <Route path="/articles/:article_id" element={<ArticleById />} />
      </Routes>
    </>
  );
}

export default Feed;
