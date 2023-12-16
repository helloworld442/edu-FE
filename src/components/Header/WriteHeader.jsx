import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../../assets/arrow-left-solid.svg";

export default function WriteHeader() {
  return (
    <StHeader>
      <HeaderNav>
        <HeaderLink onClick={() => window.history.back()}>
          <LeftArrow /> 이전으로
        </HeaderLink>
      </HeaderNav>
    </StHeader>
  );
}

const StHeader = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background: #fff;
  border-bottom: 1px solid rgb(228, 235, 240);
`;

const HeaderNav = styled.nav`
  width: 1078px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLink = styled.a`
  font-size: 0.95rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #666;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 8px;
    width: 1.4rem;
    height: 1.4rem;
    fill: #666;
  }
`;
