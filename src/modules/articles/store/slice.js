import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getArticles } from "./thunks";

const ArticlesAdapter = createEntityAdapter({
  selectId: (article) => article.url,
});

const initialState = ArticlesAdapter.getInitialState();

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.fulfilled, (state, { payload }) => {
      ArticlesAdapter.addMany(state, payload);
    });
  },
});

export const {
  selectById: selectArticleById,
  selectIds: selectArticleIds,
  selectEntities: selectArticleEntities,
  selectAll: selectAllArticles,
  selectTotal: selectTotalArticles,
} = ArticlesAdapter.getSelectors((state) => state.articles);

export default articleSlice.reducer;
