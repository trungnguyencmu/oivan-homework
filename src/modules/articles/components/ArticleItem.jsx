import React from "react";
import { Link } from "react-router-dom";
import "./ArticleItem.scss";

const ArticleItem = ({ article }) => {
  return (
    <Link to={`/${encodeURIComponent(article.url)}`} className="article-item-component">
      <figure>
        <img src={article.coverImageThumb} alt={article?.title} />
        <figcaption>
          <h3>{article?.title}</h3>
        </figcaption>
      </figure>
      <div className="wrap-description">
        <p className="subtitle">{article?.subtitle}</p>
        <Link to={`/${encodeURIComponent(article.url)}`}>Read full story ..</Link>
        <p className="description">{article?.description}</p>
      </div>
    </Link>
  );
};
export default React.memo(ArticleItem);
