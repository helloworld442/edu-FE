import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import PostsLayout from "../layout/PostsLayout";
import PostsPage from "../pages/PostsPage";
import BestPostsPage from "../pages/BestPostsPage";
import QuestionPostsPage from "../pages/QuestionPostsPage";
import WritePage from "../pages/WritePage";
import AuthLayout from "../layout/AuthLayout";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import PostPage from "../pages/PostPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CategoryPage />,
  },
  {
    path: "/write",
    element: <WritePage />,
  },
  {
    path: "/post/:postId",
    element: <PostPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignInPage />,
      },

      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/posts/",
    element: <PostsLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":categoryId",
        element: <PostsPage />,
      },
      {
        path: "best/:categoryId",
        element: <BestPostsPage />,
      },
      {
        path: "question/:categoryId",
        element: <QuestionPostsPage />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
