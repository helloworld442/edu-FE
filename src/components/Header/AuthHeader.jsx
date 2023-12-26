import styled from "styled-components";
import { device } from "../../utils/media";

export default function AuthHeader() {
  return (
    <StHeader>
      <HeaderNav>
        <HeaderLogo>별무리</HeaderLogo>
        <HeaderMenu>
          <HeaderItem href="/">카테고리</HeaderItem>
          <HeaderItem href="/write">글 남기기</HeaderItem>
          <HeaderItem>블로그</HeaderItem>
          <HeaderItem href="https://discord.gg/RnD7HP6wQD">F & A</HeaderItem>
        </HeaderMenu>
      </HeaderNav>
    </StHeader>
  );
}

const StHeader = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(228, 235, 240);
  background: #fff;

  @media ${device.tablet} {
    padding: 0 10vw;
    box-sizing: border-box;
  }
`;

const HeaderNav = styled.nav`
  width: 1078px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.a`
  font-size: 1.25rem;
  font-weight: 300;
  color: rgb(102, 103, 171, 0.8);
  cursor: pointer;
`;

const HeaderMenu = styled.ul`
  transition: all 0.5s ease-in-out;
`;

const HeaderItem = styled.a`
  padding: 12px 20px;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;
  cursor: pointer;

  &:hover {
    background: rgb(242, 246, 248);
  }
`;
