import React from "react";
import "./ArticleList.scss";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles = [] }) => {
  return (
    <section className="article-list-component">
      <ul>
        {articles.map((article) => (
          <li key={article.title}>
            <ArticleItem article={article} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ArticleList;
