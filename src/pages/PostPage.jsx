import PostAside from "../components/Post/PostAside";
import PostDetail from "../components/Post/PostDetail";
import PostTemplate from "../components/Post/PostTemplate";
import PostLayout from "../layout/PostLayout";

export default function PostPage() {
  return (
    <PostLayout>
      <PostTemplate>
        <PostDetail />
        <PostAside />
      </PostTemplate>
    </PostLayout>
  );
}
