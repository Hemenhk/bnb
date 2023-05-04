import { configureStore } from "@reduxjs/toolkit";
import getAllPostsSlice from "./posts/reducers/getAllPostsSlice";
import createPostSlice from "./posts/reducers/createPostSlice";
import getSinglePost from "./posts/reducers/getPostIdSlice";
import deletePostSlice from "./posts/reducers/deletePostSlice";
import editPostSlice from "./posts/reducers/editPostSlice";

const store = configureStore({
  reducer: {
    allPosts: getAllPostsSlice.reducer,
    createPost: createPostSlice.reducer,
    singlePost: getSinglePost.reducer,
    editPost: editPostSlice.reducer,
    deletePost: deletePostSlice.reducer,
  },
});

export default store;
