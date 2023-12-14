import styled from "styled-components";
import { device } from "../utils/media";
import PostHeader from "../components/Header/PostHeader";

export default function PostLayout({ children }) {
  return (
    <Layout>
      <PostHeader />
      {children}
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  left: 50%;
  width: 100%;
  height: auto;
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
