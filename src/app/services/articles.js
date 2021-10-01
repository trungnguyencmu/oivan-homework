import { createApi } from "@reduxjs/toolkit/query/react";
import { gql } from "graphql-request";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "https://iwa-test.herokuapp.com/graphql",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => ({
        document: gql`
          query {
            articles {
              title
              description
              subtitle
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetArticlesQuery } = api;
