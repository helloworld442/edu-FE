import { Suspense } from "react";
import PostsList from "../components/Posts/AllPosts/PostsList";

export default function PostsPage() {
  return (
    <Suspense>
      <PostsList />
    </Suspense>
  );
}
