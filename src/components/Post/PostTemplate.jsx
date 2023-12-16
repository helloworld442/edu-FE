import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostTemplate({ children }) {
  return <StPostTemplate>{children}</StPostTemplate>;
}

const StPostTemplate = styled.main`
  width: 1078px;
  margin-top: 24px;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
