import { configureStore } from "@reduxjs/toolkit";
import getAllPostsSlice from "./posts/reducers/getAllPostsSlice";
import createPostSlice from "./posts/reducers/createPostSlice";
import getSinglePost from "./posts/reducers/getPostIdSlice";
import deletePostSlice from "./posts/reducers/deletePostSlice";

const store = configureStore({
  reducer: {
    allPosts: getAllPostsSlice.reducer,
    createPost: createPostSlice.reducer,
    singlePost: getSinglePost.reducer,
    deletePost: deletePostSlice.reducer
  },
});

export default store;
