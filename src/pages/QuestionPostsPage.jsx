import { Suspense } from "react";
import PostsList from "../components/Posts/QuestionPosts/PostsList";

export default function QuestionPostsPage() {
  return (
    <Suspense>
      <PostsList />
    </Suspense>
  );
}
