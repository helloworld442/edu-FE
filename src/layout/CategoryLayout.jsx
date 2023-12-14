import styled from "styled-components";
import { device } from "../utils/media";
import MainHeader from "../components/Header/MainHeader";

export default function CategoryLayout({ children }) {
  return (
    <Layout>
      <MainHeader />
      {children}
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  left: 50%;
  max-width: 1078px;
  height: auto;
  transform: translateX(-50%);

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    box-sizing: border-box;
  }
`;
