import React, { useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import "./ArticlePage.scss";
import { useGetArticlesQuery } from "../../../app/services/articles";
import ArticleList from "../components/ArticleList";
import Button from "components/Button";
const ArticlePage = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetArticlesQuery({ page });

  const handleSetPage = (num) => {
    if (!isFetching) {
      window.scrollTo(0, 0);
      setPage(page + num);
    }
  };
  if (!data?.articles) {
    return <LoadingOverlay active={isFetching} spinner />;
  }
  return (
    <LoadingOverlay active={isFetching} spinner>
      <div className="article-page-component">
        <ArticleList articles={data?.articles} />
        <div className="action-button">
          {page > 1 && <Button onClick={() => handleSetPage(-1)}>Previous Page</Button>}

          <Button onClick={() => handleSetPage(1)}>Next Page</Button>
        </div>
      </div>
    </LoadingOverlay>
  );
};
export default React.memo(ArticlePage);
