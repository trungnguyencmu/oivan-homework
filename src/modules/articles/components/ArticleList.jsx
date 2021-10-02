import React from "react";
import ArticleItem from "./ArticleItem";
import "./ArticleList.scss";

const ArticleList = ({ articles = [] }) => {
  console.log("articles", articles);
  return (
    <section className="article-list-component" id="scroll-area">
      <ul>
        {articles.map((article, index) => (
          <li key={article.title}>
            <ArticleItem article={article} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default React.memo(ArticleList);
