import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import PostsLayout from "../layout/PostsLayout";
import PostsPage from "../pages/PostsPage";
import BestPostsPage from "../layout/BestPostsPage";
import NewPostsPage from "../layout/NewPostsPage";

const router = createBrowserRouter([
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/posts/",
    element: <PostsLayout />,
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
        path: "new/:categoryId",
        element: <NewPostsPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
