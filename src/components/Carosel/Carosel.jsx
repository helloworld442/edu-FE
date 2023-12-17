import styled, { css } from "styled-components";
import { device } from "../../utils/media";
import useCarousel from "./useCarosel";

export default function Carosel() {
  const [page, onClickRadio] = useCarousel();

  return (
    <>
      <StCarosel>
        <CaroselMenu>
          <CaroselItem page={page} background="#98c1ae" color="#1a3834">
            <CaroselTitle>
              코드 리뷰 커뮤니티 별무리
              <br />
              많.관.부!
            </CaroselTitle>
            <CaroselIntro>
              지금 글을 남기고 코드 리뷰를 받아보세요!
            </CaroselIntro>
          </CaroselItem>

          <CaroselItem page={page} background="#f9f7e8" color="#61bfad">
            <CaroselTitle>
              코드 리뷰 커뮤니티 인기글
              <br />
              Hot! Hot!
            </CaroselTitle>
            <CaroselIntro>
              수 많은 분들의 찬사를 받은 인기글입니다.
            </CaroselIntro>
          </CaroselItem>

          <CaroselItem page={page} background="#e3e3e3" color="#a28276">
            <CaroselTitle>
              코드 리뷰 커뮤니티 Q & A
              <br />
              많.관.부!
            </CaroselTitle>
            <CaroselIntro>수 많은 분들이 답변을 기다리고 있어요!!</CaroselIntro>
          </CaroselItem>
        </CaroselMenu>
      </StCarosel>
      <CaroselRadios>
        <CaroselRadio onClick={() => onClickRadio(0)} checked={page === 0} />

        <CaroselRadio onClick={() => onClickRadio(1)} checked={page === 1} />

        <CaroselRadio onClick={() => onClickRadio(2)} checked={page === 2} />
      </CaroselRadios>
    </>
  );
}

const StCarosel = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
  overflow: hidden;
  border-radius: 5px;

  @media ${device.tablet} {
    height: 230px;
  }
`;

const CaroselMenu = styled.ul`
  width: 300%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const CaroselItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 36px 24px;
  box-sizing: border-box;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  transform: translateX(-${(props) => props.page * 100}%);
  transition: transform 0.5s ease;

  @media ${device.tablet} {
    padding: 36px;
  }
`;

const CaroselTitle = styled.h3`
  font-size: 18px;
  font-weight: 750;
  font-family: "Noto Sans KR";
  line-height: 140%;
  letter-spacing: -0.8px;
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
  opacity: 0.8;
  word-spacing: 0px;

  @media ${device.tablet} {
    font-size: 0.85rem;
  }
`;

const CaroselRadios = styled.div`
  width: 100%;
  margin-top: 6px;
  background: #fff;
  text-align: center;
`;

const CaroselRadio = styled.button`
  width: 0.75rem;
  height: 0.755rem;
  box-sizing: border-box;
  border: none;
  background: #d9d9d9;
  border-radius: 50%;
  cursor: pointer;

  & + & {
    margin-left: 12px;
  }

  ${(props) =>
    props.checked &&
    css`
      background: rgb(102, 103, 171, 0.8);
    `}
`;
