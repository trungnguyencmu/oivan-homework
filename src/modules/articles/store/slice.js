import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getArticle, getArticles } from "./thunks";

const ArticlesAdapter = createEntityAdapter({
  selectId: (article) => article.url,
});

const initialState = ArticlesAdapter.getInitialState({
  metadata: {page: 1}
});

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    updateMetadata: (state, {payload}) => {
      state.metadata = {page: payload}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getArticles.fulfilled, (state, { payload }) => {
      ArticlesAdapter.addMany(state, payload);
    });
    builder.addCase(getArticle.fulfilled, (state, { payload }) => {
      const { url } = payload;
      const existEntity = state.entities[url];
      if (existEntity) {
        ArticlesAdapter.updateOne(state, { id: url, changes: { ...payload } });
      } 
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

export const selectMetadata = (state) => state.articles.metadata;

export const { updateMetadata } = articleSlice.actions;

export default articleSlice.reducer;
