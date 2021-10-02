import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ArticleItem.scss";

const ArticleItem = ({ article }) => {
  const [random] = useState(Math.random(1000));
  const coverImage = `https://picsum.photos/200/300?grayscale/${random}`;
  return (
    <Link to={`/${encodeURIComponent(article.url)}`} className="article-item-component">
      <figure>
        <img src={coverImage} alt={article?.title} />
        <figcaption>
          <h3>{article?.title}</h3>
        </figcaption>
      </figure>
      <p className="subtitle">{article?.subtitle}</p>
      <p>{article?.description}</p>
      <Link to={`/${encodeURIComponent(article.url)}`}>View Detail</Link>
    </Link>
  );
};
export default React.memo(ArticleItem);
