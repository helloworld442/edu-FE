import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostsTemplate({ children }) {
  return <StPostsTemplate>{children}</StPostsTemplate>;
}

const StPostsTemplate = styled.main`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 100%;
    margin-top: 24px;
    flex-direction: column;
    gap: 48px;
  }
`;
