import React from "react";
import { Link } from "react-router-dom";
import "./ArticleItem.scss";

const ArticleItem = ({ article }) => {
  return (
    <div className="article-item-component">
      <figure>
        <img
          src={`https://picsum.photos/200/300?grayscale/${Math.random(1000)}`}
          alt={article?.title}
        />
        <figcaption>
          <h3>{article?.title}</h3>
        </figcaption>
      </figure>
      <p className="subtitle">{article?.subtitle}</p>
      <p>{article?.description}</p>
      <Link to={`/${encodeURIComponent(article.url)}`}>View Detail</Link>
    </div>
  );
};
export default React.memo(ArticleItem);
