import styled from "styled-components";
import PostsItem from "./PostsItem";
import usePosts from "../../../hooks/usePosts";

export default function PostsList() {
  const posts = usePosts();

  return (
    <StPostsList>
      {posts.map((post) => (
        <PostsItem key={post.id} post={post} />
      ))}
    </StPostsList>
  );
}

const StPostsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 14px;
`;
