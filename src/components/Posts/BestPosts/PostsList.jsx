import styled from "styled-components";
import PostsItem from "./PostsItem";
import usePosts from "../../../hooks/usePosts";

export default function PostsList() {
  const posts = usePosts();

  return (
    <StPostList>
      {posts.map((post, index) => (
        <PostsItem key={post.id} post={post} index={index} />
      ))}
    </StPostList>
  );
}

const StPostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;
