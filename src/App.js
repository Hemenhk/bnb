import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root.js";
import HomePage from "./pages/HomePage.js";
import CreatePost from "./pages/posts/CreatePost.js";
import EditPostPage from "./pages/posts/EditPostPage.js";
import PostDetailPage from "./pages/posts/PostDetailPage.js";
import SigninPage from "./pages/auth/SigninPage.js";
import SignupPage from "./pages/auth/SignupPage.js";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <HomePage /> },
        {path: "signin", element: <SigninPage />},
        {path: "signup", element: <SignupPage />},
        { path: "create", element: <CreatePost /> },
        {
          path: ":postId",
          id: "post-id",
          children: [
            { index: true, element: <PostDetailPage /> },
            { path: "edit", element: <EditPostPage /> },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
