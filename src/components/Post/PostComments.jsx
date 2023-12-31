import styled from "styled-components";
import PostComment from "./PostComment";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getComments } from "../../apis/comment";

export default function PostComments() {
  const comments = useComments();

  return (
    <StPostComments>
      <PostCommentTitle>
        답변 <b>{comments.length}</b>
      </PostCommentTitle>
      {comments.map((comment) => (
        <PostComment key={comment.commentId} comment={comment} />
      ))}
    </StPostComments>
  );
}

function useComments() {
  const { postId } = useParams();
  const { data } = useQuery(["comments", postId], () => getComments(postId), {
    retry: 0,
    staleTime: 5 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    suspense: true,
  });

  return data;
}

const StPostComments = styled.ul`
  width: 100%;
  margin: 36px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PostCommentTitle = styled.h2`
  margin: 6px 0;
  font-size: 1.1rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;

  b {
    margin-left: 6px;
    color: rgb(102, 103, 171, 0.8);
  }
`;
