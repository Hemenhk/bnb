import { configureStore } from "@reduxjs/toolkit";
import getAllPostsSlice from "./posts/reducers/getAllPostsSlice";
import createPostSlice from "./posts/reducers/createPostSlice";
import getSinglePost from "./posts/reducers/getPostIdSlice";

const store = configureStore({
  reducer: {
    allPosts: getAllPostsSlice.reducer,
    createPost: createPostSlice.reducer,
    singleMovie: getSinglePost.reducer
  },
});

export default store;
