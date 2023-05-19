import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.js";
import HomePage from "./pages/HomePage.js";
import CreatePost from "./pages/posts/CreatePost.js";
import EditPostPage from "./pages/posts/EditPostPage.js";
import PostDetailPage from "./pages/posts/PostDetailPage.js";
import SigninPage from "./pages/auth/SigninPage.js";
import SignupPage from "./pages/auth/SignupPage.js";
import PostByAuthor from "./pages/posts/PostByAuthor";
import ErrorPage from "./pages/ErrorPage.js";

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "signin", element: <SigninPage /> },
        { path: "signup", element: <SignupPage /> },
        { path: "create", element: <CreatePost /> },
        {
          path: "posts/:postId",
          id: "post-id",
          children: [
            { index: true, element: <PostDetailPage /> },
            { path: "edit", element: <EditPostPage /> },
          ],
        },
        {
          path: "profile/:profileId",
          id: "profile-id",
          children: [{ index: true, element: <PostByAuthor /> }],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
