import styled from "styled-components";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right-solid.svg";

export default function PostItem({ post }) {
  return (
    <StPostItem href={"/post/" + post.id}>
      <PostItemTitle>{post.title}</PostItemTitle>
      <PostItemIcon />
    </StPostItem>
  );
}

const StPostItem = styled.a`
  padding: 16px 12px;
  margin: 14px 0;
  box-sizing: border-box;
  border: 1px solid #d7e0e6;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid rgb(102, 103, 171, 0.8);
  }
`;

const PostItemTitle = styled.h3`
  width: 90%;
  font-size: 0.75rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PostItemIcon = styled(ArrowRight)`
  fill: rgb(102, 103, 171, 0.8);
`;
