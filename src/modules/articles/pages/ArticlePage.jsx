import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleList from "../components/ArticleList";
import { selectAllArticles, selectMetadata, updateMetadata } from "../store/slice";
import { getArticles } from "../store/thunks";
import "./ArticlePage.scss";
const ArticlePage = () => {
  const { page } = useSelector(selectMetadata);
  const articles = useSelector(selectAllArticles);
  const dispatch = useDispatch();
  useEffect(() => {
    page === 1 && dispatch(getArticles(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(updateMetadata(page + 1));
    dispatch(getArticles(page + 1));
  };
  return (
    <div className="article-page-component">
      <ArticleList articles={articles} handleLoadMore={handleLoadMore} />
    </div>
  );
};
export default React.memo(ArticlePage);
