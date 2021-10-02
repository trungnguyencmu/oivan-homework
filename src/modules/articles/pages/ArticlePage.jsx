import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleList from "../components/ArticleList";
import { selectAllArticles } from "../store/slice";
import { getArticles } from "../store/thunks";
import "./ArticlePage.scss";
const ArticlePage = () => {
  const [page, setPage] = useState(1);
  const articles = useSelector(selectAllArticles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles(page));
  }, [dispatch, page]);
  const handleSetPage = () => {
    setPage(page + 1);
  };
  return (
    <div className="article-page-component">
      <ArticleList articles={articles} handleSetPage={handleSetPage} />
    </div>
  );
};
export default React.memo(ArticlePage);
