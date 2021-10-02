import { useGetArticleQuery } from "app/services/articles";
import React from "react";
import { useRouteMatch } from "react-router";
import "./ArticleDetailPage.scss";
const ArticleDetailPage = () => {
  const slug = useRouteMatch("/:url");
  const url = decodeURIComponent(slug.params.url);
  const { data, isLoading, isFetching } = useGetArticleQuery({ url });
  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("isFetching", isFetching);
  return (
    <div className="article-detail-page-component">
      <div className="content-article">
        <h1>{data?.title}</h1>
        <img
          src={`https://picsum.photos/900/400?grayscale/${Math.random(1000)}`}
          alt={data?.coverImageUrl}
        />
        <div className="content" dangerouslySetInnerHTML={{ __html: data?.content }} />
      </div>
    </div>
  );
};
export default ArticleDetailPage;
