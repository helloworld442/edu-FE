import styled from "styled-components";
import { device } from "../utils/media";
import WriteHeader from "../components/Header/WriteHeader";

export default function WriteLayout({ children }) {
  return (
    <Layout>
      <WriteHeader />
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
  background: rgb(252, 252, 253);

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    box-sizing: border-box;
  }
`;
