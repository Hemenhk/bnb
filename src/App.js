import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import CreatePost from "./pages/posts/CreatePost";
import EditPostPage from "./pages/posts/EditPostPage";
import PostDetailPage from "./pages/posts/PostDetailPage";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";

function App() {
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
