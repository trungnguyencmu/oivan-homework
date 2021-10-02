import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { selectArticleById } from "../store/slice";
import { getArticle } from "../store/thunks";
import "./ArticleDetailPage.scss";

const ArticleDetailPage = () => {
  const dispatch = useDispatch();
  const slug = useRouteMatch("/:url");
  const url = decodeURIComponent(slug.params.url);
  const article = useSelector((state) => selectArticleById(state, url));

  useEffect(() => {
    if (!article?.content) {
      dispatch(getArticle(url));
    }
  }, [dispatch, url, article]);

  return (
    <div className="article-detail-page-component">
      <div className="content-article">
        <h1>{article?.title}</h1>
        <img src={article?.coverImage} alt={article?.coverImageUrl} />
        <div className="content" dangerouslySetInnerHTML={{ __html: article?.content }} />
      </div>
    </div>
  );
};
export default React.memo(ArticleDetailPage);
