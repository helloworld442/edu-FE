import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostsBanner() {
  return (
    <StPostsBanner>
      <BannerTitle>
        별무리 오픈 기념 이벤트
        <br />
        기대하세요!
      </BannerTitle>
      <BannerIntro>12.9 ~ 12.14까지 진행됩니다. 상품 받아가세요!</BannerIntro>
    </StPostsBanner>
  );
}

const StPostsBanner = styled.div`
  width: 100%;
  height: 360px;
  padding: 36px 24px;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: rgb(80, 119, 96, 0.9);

  @media ${device.tablet} {
    height: 235px;
  }
`;

const BannerTitle = styled.h3`
  font-size: 18px;
  font-weight: 750;
  font-family: "Noto Sans KR";
  line-height: 140%;
  letter-spacing: -0.8px;
  color: #fff;
  padding-top: 8px;
  padding-bottom: 12px;

  @media ${device.tablet} {
    margin-top: 20px;
    font-size: 1.35rem;
  }
`;

const BannerIntro = styled.h5`
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
