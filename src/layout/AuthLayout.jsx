import styled from "styled-components";
import { device } from "../utils/media";
import { Outlet } from "react-router-dom";
import AuthHeader from "../components/Header/AuthHeader";

export default function AuthLayout() {
  return (
    <Layout>
      <AuthHeader />
      <Outlet />
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  left: 50%;
  width: 100%;
  height: auto;
  padding: 0 36px;
  box-sizing: border-box;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    box-sizing: border-box;
  }
`;
