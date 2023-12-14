import styled from "styled-components";
import { device } from "../../../utils/media";

export default function PostsItem({ post }) {
  return (
    <StPostsItem>
      <PostsItemTitle href={"/post/" + post.id}>{post.title}</PostsItemTitle>
      <PostsItemContent>{post.question}</PostsItemContent>
      <PostsItemUser>
        <span></span>
        <h4>김민승</h4>
        <h5>2023.08.12</h5>
      </PostsItemUser>
      <PostsItemPoint>
        <span>0</span>
        <h5>POINT</h5>
      </PostsItemPoint>
    </StPostsItem>
  );
}

const StPostsItem = styled.li`
  position: relative;
  width: 700px;
  height: 190px;
  padding: 30px 0;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(228, 235, 240);

  @media ${device.tablet} {
    width: 100%;
  }
`;

const PostsItemTitle = styled.a`
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 550;
  font-size: 15px;
  color: rgb(20, 22, 23);

  &:hover {
    color: rgb(102, 103, 171, 1);
    cursor: pointer;
  }
`;

const PostsItemContent = styled.h5`
  width: 70%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  color: rgb(95, 102, 107);
  line-height: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostsItemUser = styled.div`
  position: absolute;
  bottom: 32px;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    width: 26px;
    height: 26px;
    margin-right: 8px;
    border-radius: 100%;
    background: #d9d9d9;
  }

  h4 {
    font-size: 0.75rem;
    font-weight: 500;
    font-family: "Noto Sans KR";
  }

  h5 {
    padding-left: 6px;
    margin-left: 6px;
    border-left: 1.5px solid rgb(157, 167, 174);
    font-size: 0.725rem;
    font-weight: 500;
    font-family: "Noto Sans KR";
    color: rgb(157, 167, 174);
  }
`;

const PostsItemPoint = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 105px;
  height: 105px;
  border: 2px solid #e1e7eb;
  border-radius: 50%;
  font-weight: 300;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    font-size: 1.8rem;
    color: rgb(102, 103, 171, 0.8);
  }

  h5 {
    font-size: 0.65rem;
    font-weight: 650;
    font-family: "Noto Sans KR";
  }
`;
