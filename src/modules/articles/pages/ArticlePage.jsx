import React, { useState } from "react";
import "./ArticlePage.scss";
import { useGetArticlesQuery } from "../../../app/services/articles";
import ArticleList from "../components/ArticleList";
import Button from "components/Button";
const ArticlePage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useGetArticlesQuery({ page });

  if (isLoading) {
    return <></>;
  }
  const handleSetPage = (num) => {
    if (!isFetching) {
      window.scrollTo(0, 0);
      setPage(page + num);
    }
  };

  return (
    <div className="article-page-component">
      <ArticleList articles={data?.articles} isFetching={isFetching} />
      <div className="action-button">
        {page > 1 && <Button onClick={() => handleSetPage(-1)}>Previous Page</Button>}

        <Button onClick={() => handleSetPage(1)}>Next Page</Button>
      </div>
    </div>
  );
};
export default ArticlePage;
