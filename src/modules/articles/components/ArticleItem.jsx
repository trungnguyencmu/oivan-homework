import React from "react";
import "./ArticleItem.scss";

const ArticleItem = ({ article }) => {
  console.log("article", article);
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
      <a href="#">View Detail</a>
    </div>
  );
};
export default React.memo(ArticleItem);
