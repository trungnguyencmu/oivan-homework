import React from "react";
import { useGetArticlesQuery } from "../../../app/services/articles";
import ArticleList from "../components/ArticleList";
const ArticlePage = () => {
  const { data, isLoading, isFetching } = useGetArticlesQuery({ page: 1 });
  console.log("isLoading", isLoading);
  console.log("isFetching", isFetching);
  console.log("data", data);
  if (isLoading) {
    return <></>;
  }
  return (
    <div className="article-page-component">
      <ArticleList articles={data?.articles} />
    </div>
  );
};
export default ArticlePage;
