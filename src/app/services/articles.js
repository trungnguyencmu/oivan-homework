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
  }),
});

export const { useGetArticlesQuery } = api;
