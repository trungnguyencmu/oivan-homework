import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "modules/articles/store/slice";
export const store = configureStore({
  reducer: {
    articles: articleSlice,
  },
});
