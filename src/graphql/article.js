import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient("https://iwa-test.herokuapp.com/graphql");

export function useGetArticles() {
  return useQuery("get-posts", async () => {
    const { articles } = await graphQLClient.request(gql`
      query {
        articles {
          title
          description
          subtitle
        }
      }
    `);
    return articles;
  });
}
