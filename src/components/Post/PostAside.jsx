import styled from "styled-components";
import { Suspense } from "react";
import { device } from "../../utils/media";
import PostList from "./PostList";
import Carosel from "../Carosel/Carosel";

export default function PostAside() {
  return (
    <Suspense fallback={<div>asdf</div>}>
      <StPostAside>
        <PostList />
        <Carosel />
      </StPostAside>
    </Suspense>
  );
}

const StPostAside = styled.aside`
  float: right;

  @media ${device.tablet} {
    width: 100%;
  }
`;
