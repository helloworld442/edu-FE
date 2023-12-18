import styled from "styled-components";
import { Suspense } from "react";
import { device } from "../../utils/media";
import PostList from "./PostList";

export default function PostAside() {
  return (
    <Suspense fallback={<div>asdf</div>}>
      <StPostAside>
        <PostList />
      </StPostAside>
    </Suspense>
  );
}

const StPostAside = styled.aside`
  width: 300px;
  float: right;

  @media ${device.tablet} {
    width: 100%;
  }
`;
