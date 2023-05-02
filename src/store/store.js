import { configureStore } from "@reduxjs/toolkit";
import getAllPostsSlice from "./posts/reducers/getAllPostsSlice";
import createPostSlice from "./posts/reducers/createPostSlice";

const store = configureStore({
  reducer: {
    allPosts: getAllPostsSlice.reducer,
    createPost: createPostSlice.reducer
  },
});

export default store;
