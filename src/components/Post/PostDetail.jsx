import styled from "styled-components";
import { device } from "../../utils/media";
import PostQuestion from "./PostQuestion";
import PostComments from "./PostComments";
import { Suspense } from "react";

export default function PostDetail() {
  return (
    <Suspense fallback={<div>asdf</div>}>
      <StPostDetail>
        <PostQuestion />
        <PostComments />
      </StPostDetail>
    </Suspense>
  );
}

const StPostDetail = styled.div`
  width: 720px;
  float: left;

  @media ${device.tablet} {
    width: 100%;
  }
`;
