import styled from "styled-components";
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
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(249, 249, 249);
`;
