import styled from "styled-components";
import { device } from "../../utils/media";

const AuthInputBox = styled.div`
  position: relative;
  width: 100%;
  margin: 24px 0;
  display: flex;
  align-items: center;
`;

const AuthInputLabel = styled.label`
  display: inline-block;
  width: 20%;
  font-size: 1rem;
  font-weight: 300;

  b {
    color: red;
  }
`;

const AuthInput = styled.input`
  width: 50%;
  height: 54px;
  padding: 12px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 0.825rem;
  font-weight: 400;
  color: #000;
  background: rgb(102, 103, 171, 0.1);

  &::placeholder {
    color: rgb(157, 167, 174);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const AuthInputButton = styled.button`
  position: absolute;
  right: 0;
  height: 50px;
  padding: 8px 24px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 800;
  font-family: "Noto Sans KR";
  color: rgb(254, 254, 254);
  background: rgb(102, 103, 171, 0.8);
  cursor: pointer;

  &:disabled {
    background: rgb(194, 200, 214);
    cursor: not-allowed;
  }
`;

const AuthTimer = styled.div`
  height: 50px;
  margin-left: 1.4vw;
  padding: 8px 14px;
  border: none;
  outline: none;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 0.95rem;
  font-weight: 300;
  color: rgb(254, 254, 254);
  background: rgb(102, 103, 171, 0.8);
  line-height: 35px;

  @media ${device.tablet} {
    margin-left: 0.5rem;
  }
`;

const AuthTitle = styled.h2`
  margin: 36px 0;
  font-size: 1.85rem;
  font-weight: 650;
  font-family: "Noto Sans KR";
  color: #333;
`;

const AuthProgresses = styled.div`
  margin: 12px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthProgress = styled.span`
  width: 64px;
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.05rem;
    height: 1.05rem;
    padding: 18px;
    margin-bottom: 8px;
    border-radius: 50%;
    fill: #fff;
  }

  b {
    font-size: 0.725rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: #333;
  }

  &.actived {
    svg {
      background: rgb(102, 103, 171, 0.5);
    }
  }

  &.active {
    svg {
      background: rgb(102, 103, 171, 1);
    }
  }

  &.disabled {
    svg {
      fill: #333;
      background: #fff;
    }
  }
`;

const AuthLine = styled.div`
  width: 28px;
  height: 1px;
  margin-bottom: 18px;
  background: #d7e0e6;
`;

export {
  AuthInputBox,
  AuthInputLabel,
  AuthInput,
  AuthInputButton,
  AuthTimer,
  AuthTitle,
  AuthProgresses,
  AuthProgress,
  AuthLine,
};
