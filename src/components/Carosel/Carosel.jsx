import styled from "styled-components";
import { device } from "../../utils/media";

export default function Carosel() {
  return (
    <StCarosel>
      <CaroselTitle>
        별무리 오픈 기념 이벤트
        <br />
        기대하세요!
      </CaroselTitle>
      <CaroselIntro>12.9 ~ 12.14까지 진행됩니다. 상품 받아가세요!</CaroselIntro>
    </StCarosel>
  );
}

const StCarosel = styled.div`
  width: 100%;
  height: 360px;
  padding: 36px 24px;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: rgb(80, 119, 96);

  @media ${device.tablet} {
    height: 230px;
    padding: 36px;
  }
`;

const CaroselTitle = styled.h3`
  font-size: 18px;
  font-weight: 750;
  font-family: "Noto Sans KR";
  line-height: 140%;
  letter-spacing: -0.8px;
  color: #fff;
  padding-top: 8px;
  padding-bottom: 12px;

  @media ${device.tablet} {
    margin-top: 16px;
    font-size: 1.35rem;
  }
`;

const CaroselIntro = styled.h5`
  font-size: 13px;
  font-family: "Noto Sans KR";
  line-height: 140%;
  letter-spacing: -0.8px;
  font-weight: 400;
  color: #fff;
  opacity: 0.8;
  word-spacing: 0px;

  @media ${device.tablet} {
    font-size: 0.85rem;
  }
`;
