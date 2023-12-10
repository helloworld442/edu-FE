import styled from "styled-components";
import { device } from "../../../utils/media";
import PostsList from "./PostsList";
import PostsSearch from "./PostsSearch";
import { Suspense } from "react";

export default function PostsSection() {
  return (
    <StPostsSection>
      <SectionTitle>인기 글</SectionTitle>
      <SectionDesc>가장 신빙성 있는 이야기들</SectionDesc>

      <PostsSearch />

      <Suspense fallback={<div>asdf</div>}>
        <PostsList />
      </Suspense>
    </StPostsSection>
  );
}

const StPostsSection = styled.section`
  width: 680px;
  float: right;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 13px;
  font-size: 1.45rem;
  font-weight: 550;
  font-style: normal;
  font-family: "Noto Sans KR";
`;

const SectionDesc = styled.h4`
  font-size: 0.85rem;
  font-weight: 400;
  font-style: normal;
  font-family: "Noto Sans KR";
  color: #9da7ae;
`;
