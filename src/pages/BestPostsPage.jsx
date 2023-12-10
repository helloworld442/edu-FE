import { Suspense } from "react";
import PostsList from "../components/Posts/BestPosts/PostsList";

export default function BestPostsPage() {
  return (
    <Suspense>
      <PostsList />
    </Suspense>
  );
}
