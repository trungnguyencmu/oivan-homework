import { createApi } from "@reduxjs/toolkit/query/react";
import { gql } from "graphql-request";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";


export const api = createApi({
  reducerPath: "articlesApi",
  baseQuery: graphqlRequestBaseQuery({
    url: "https://iwa-test.herokuapp.com/graphql",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: ({ page }) => ({
        document: gql`
          query {
            articles(pageNumber: ${page}) {
              title
              description
              subtitle
              url
            }
          }
        `,
      }),
    }),
    getArticle: builder.query({
      query: ({ url }) => {
        return {
          document: gql`
            query {
              article(url: "${url}") {
                title
                coverImageUrl
                description
                subtitle
                content
              }
            }
          `,
        };
      },
      transformResponse: (response) => response.article,
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticleQuery } = api;
