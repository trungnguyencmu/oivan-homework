import { createAsyncThunk } from "@reduxjs/toolkit";
import { GraphQLClient, gql } from "graphql-request";
const graphQLClient = new GraphQLClient("https://iwa-test.herokuapp.com/graphql");

export const getArticles = createAsyncThunk(
  "get/article-list",
  async (page) => {
    const query = gql`
      query {
        articles(pageNumber: ${page}) {
          title
          description
          subtitle
          url
        }
      }
    `;
    const data = await graphQLClient.request(query)
    return data.articles;
  }
    
);