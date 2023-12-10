import styled from "styled-components";
import { device } from "../utils/media";
import Header from "../components/@common/Header";
import PostsTemplate from "../components/Posts/PostsTemplate";
import PostsMain from "../components/Posts/PostsMain";
import PostsAside from "../components/Posts/PostsAside";

export default function PostsLayout() {
  return (
    <Layout>
      <Header />
      <PostsTemplate>
        <PostsMain />
        <PostsAside />
      </PostsTemplate>
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  left: 50%;
  width: 1100px;
  height: auto;
  padding: 0 36px;
  box-sizing: border-box;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    box-sizing: border-box;
  }
`;
