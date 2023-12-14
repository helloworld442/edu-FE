import styled from "styled-components";
import { device } from "../../utils/media";
import Carosel from "../Carosel/Carosel";

export default function PostsAside() {
  return (
    <StPostsAside>
      <Carosel />
    </StPostsAside>
  );
}

const StPostsAside = styled.aside`
  width: 310px;

  @media ${device.tablet} {
    width: 100%;
  }
`;
