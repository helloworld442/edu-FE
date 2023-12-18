import styled, { css } from "styled-components";

export default function ErrorHeader() {
  return (
    <StHeader>
      <HeaderNav>
        <HeaderLogo>별무리</HeaderLogo>
        <HeaderMenu>
          <HeaderItem href="/">카테고리</HeaderItem>
          <HeaderItem href="/write">글 남기기</HeaderItem>
          <HeaderItem>블로그</HeaderItem>
          <HeaderItem href="https://discord.gg/RnD7HP6wQD">F & A</HeaderItem>
          <HeaderItem $primary href="/user/signin">
            로그인
          </HeaderItem>
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

  ${(props) =>
    props.$primary &&
    css`
      padding: 8px 14px;
      margin-left: 24px;
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid rgb(102, 103, 171, 0.8);
      color: rgb(102, 103, 171, 1);

      &:hover {
        background: none;
        cursor: pointer;
      }
    `}
`;
