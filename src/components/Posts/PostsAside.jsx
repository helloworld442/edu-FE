import styled from "styled-components";
import PostsBanner from "./PostBanner";
import { device } from "../../utils/media";

export default function PostsAside() {
  return (
    <StPostsAside>
      <PostsBanner />
    </StPostsAside>
  );
}

const StPostsAside = styled.aside`
  width: 280px;

  @media ${device.tablet} {
    width: 100%;
  }
`;
