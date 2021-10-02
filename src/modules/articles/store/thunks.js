import { createAsyncThunk } from "@reduxjs/toolkit";
import { GraphQLClient, gql } from "graphql-request";
import { handleMapperArticle, handleMapperArticles } from "./mapper";
const graphQLClient = new GraphQLClient("https://iwa-test.herokuapp.com/graphql");

export const getArticles = createAsyncThunk("get/article-list", async (page) => {
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
  const data = await graphQLClient.request(query);
  return handleMapperArticles(data.articles);
});
export const getArticle = createAsyncThunk(
  "get/article",
  async (url) => {
    console.log('url', url);
    const query = gql`
      query {
        article(url: "${url}") {
          title
          coverImageUrl
          description
          subtitle
          content
          url
        }
      }
    `;
    const data = await graphQLClient.request(query)
    return handleMapperArticle(data.article);
  }
    
);