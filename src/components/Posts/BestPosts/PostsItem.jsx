import styled from "styled-components";
import { device } from "../../../utils/media";

export default function PostsItem({ post, index }) {
  return (
    <StPostsItem>
      <PostsItemId>{index + 1}</PostsItemId>
      <PostsItemTitle href={"/post/" + post.id}>{post.title}</PostsItemTitle>
      <PostsItemContent>{post.question}</PostsItemContent>
      <PostsItemUser>
        <span></span>
        <h4>김민승</h4>
        <h5>2023.08.12</h5>
      </PostsItemUser>
      <PostsItemInfo>
        <h6>
          추천 <span>1</span>
        </h6>
        <h6>
          조회 <span>2</span>
        </h6>
      </PostsItemInfo>
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

const PostsItemId = styled.span`
  float: left;
  position: relative;
  left: 4px;
  top: -3px;
  margin-right: 16px;
  font-size: 2rem;
  font-weight: 300;
  color: rgb(102, 103, 171, 0.8);
`;

const PostsItemTitle = styled.a`
  width: 80%;
  padding-bottom: 8px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 550;
  font-size: 15px;
  color: rgb(20, 22, 23);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    color: rgb(102, 103, 171, 1);
    cursor: pointer;
  }
`;

const PostsItemContent = styled.h5`
  width: 80%;
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

const PostsItemInfo = styled.div`
  position: absolute;
  bottom: 40px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 12px;

  h6 {
    font-size: 0.725rem;
    font-weight: 500;
    font-family: "Noto Sans KR";
    color: rgb(157, 167, 174);
  }

  span {
    color: rgb(102, 103, 171, 1);
  }
`;
