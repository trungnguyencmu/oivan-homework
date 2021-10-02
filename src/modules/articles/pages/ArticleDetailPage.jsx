import { useGetArticleQuery } from "app/services/articles";
import LoadingOverlay from "react-loading-overlay";

import React, { useState } from "react";
import { useRouteMatch } from "react-router";
import "./ArticleDetailPage.scss";
const ArticleDetailPage = () => {
  const [random] = useState(Math.random(1000));

  const slug = useRouteMatch("/:url");
  const url = decodeURIComponent(slug.params.url);
  const { data, isLoading } = useGetArticleQuery({ url });

  if (!isLoading && !data?.title) {
    return (
      <LoadingOverlay active={isLoading} spinner>
        <div className="wrap-no-content">
          <div className="no-content-article">Sorry! No content</div>
        </div>
      </LoadingOverlay>
    );
  }
  const coverImage = `https://picsum.photos/900/400?grayscale/${random}`;
  return (
    <LoadingOverlay active={isLoading} spinner>
      <div className="article-detail-page-component">
        <div className="content-article">
          <h1>{data?.title}</h1>
          <img src={coverImage} alt={data?.coverImageUrl} />
          <div className="content" dangerouslySetInnerHTML={{ __html: data?.content }} />
        </div>
      </div>
    </LoadingOverlay>
  );
};
export default React.memo(ArticleDetailPage);
