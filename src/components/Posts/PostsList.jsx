import styled from "styled-components";
import { useQuery } from "react-query";
import { getReviews } from "../../apis/posts";
import PostsItem from "./PostsItem";

export default function PostsList() {
  const posts = usePosts();

  return (
    <StPostList>
      {posts.map((post) => (
        <PostsItem key={post.id} post={post} />
      ))}
    </StPostList>
  );
}

export function usePosts() {
  const { data } = useQuery("reviews", getReviews, {
    retry: 0,
    staleTime: 5 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    suspense: true,
  });

  return data;
}

const StPostList = styled.ul`
  margin: 18px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 14px;
`;
