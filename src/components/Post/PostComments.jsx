import styled from "styled-components";
import PostComment from "./PostComment";

export default function PostComments() {
  return (
    <StPostComments>
      <PostCommentTitle>
        답변 <b>1</b>
      </PostCommentTitle>
      <PostComment />
    </StPostComments>
  );
}

const StPostComments = styled.ul`
  width: 100%;
  margin: 36px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
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
