import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./ArticleList.scss";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles = [], handleLoadMore }) => {
  console.log("articles?.length", articles?.length);
  // const fetchMoreData = () => {};
  return (
    <section className="article-list-component" id="scroll-area">
      <InfiniteScroll
        dataLength={articles.length}
        next={handleLoadMore}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <ul>
          {articles.map((article, index) => (
            <li key={article.title}>
              <ArticleItem article={article} />
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </section>
  );
};
export default ArticleList;
