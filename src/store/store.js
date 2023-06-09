import { configureStore } from "@reduxjs/toolkit";
import getAllPostsSlice from "./posts/reducers/getAllPostsSlice";
import createPostSlice from "./posts/reducers/createPostSlice";
import getSinglePost from "./posts/reducers/getPostIdSlice";
import deletePostSlice from "./posts/reducers/deletePostSlice";
import editPostSlice from "./posts/reducers/editPostSlice";
import authSlice from "./auth/reducers/authSlice";
import inputValidationSlice from "./validation/reducers/inputValidationSlice";
import getPostByAuthor from "./posts/reducers/getPostsByAuthorSlice";
import themeSlice from "./theme/reducers/themeSlice";

const store = configureStore({
  reducer: {
    allPosts: getAllPostsSlice.reducer,
    authorPosts: getPostByAuthor.reducer,
    createPost: createPostSlice.reducer,
    singlePost: getSinglePost.reducer,
    editPost: editPostSlice.reducer,
    deletePost: deletePostSlice.reducer,
    auth: authSlice.reducer,
    validation: inputValidationSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export default store;
