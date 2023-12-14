import styled from "styled-components";
import PostsSearch from "./PostsSearch";
import PostsCategory from "./PostsCategory";
import { Outlet } from "react-router-dom";
import { device } from "../../utils/media";

export default function PostsMain() {
  return (
    <StPostsMain>
      <PostsSearch />
      <PostsCategory />
      <Outlet />
    </StPostsMain>
  );
}

const StPostsMain = styled.div`
  width: 700px;

  @media ${device.tablet} {
    width: 100%;
  }
`;
