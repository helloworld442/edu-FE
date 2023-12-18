import styled from "styled-components";
import { ReactComponent as Heart } from "../../assets/heart-solid.svg";
import { ReactComponent as Ellipsis } from "../../assets/ellipsis-vertical-solid.svg";

export default function PostComment() {
  return (
    <StPostComment>
      <CommentUser>
        <span className="profile"></span>
        <div className="info">
          <h4 className="info-name">김민승</h4>
          <h5 className="info-grade">Javascript , React</h5>
        </div>
      </CommentUser>
      <CommentEllipsis />
      <CommnetContent>
        보통 도커환경 만들어서 많이들 하시는 것 같더라고요~ 구글에 검색해보면
        <br />
        여러 시행착오를 통해 환경 구축하신분들 글 찾아보실 수 있을겁니다.
      </CommnetContent>
      <CommentHeart>
        <Heart />
        좋아요 0
      </CommentHeart>
    </StPostComment>
  );
}

const StPostComment = styled.li`
  position: relative;
  width: 100%;
  min-height: 240px;
  padding: 30px 24px;
  box-sizing: border-box;
  border: 1px solid #d7e0e6;
  border-radius: 4px;
`;

const CommentUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  .profile {
    display: inline-block;
    width: 42px;
    height: 42px;
    background: #d9d9d9;
    border-radius: 50%;
  }

  .info-name {
    margin-bottom: 8px;
    font-size: 0.95rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: #333;
  }

  .info-grade {
    font-size: 0.825rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #444;
  }
`;

const CommentHeart = styled.span`
  position: absolute;
  bottom: 30px;
  right: 24px;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR";
  font-size: 0.875rem;
  color: #bbb;
  cursor: pointer;

  svg {
    margin-right: 12px;
    width: 1.25rem;
    height: 1.25rem;
    fill: #bbb;
  }

  &:hover {
    background: rgb(187, 187, 187, 0.1);
  }
`;

const CommnetContent = styled.pre`
  margin-top: 24px;
  font-size: 0.925rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #444;
  line-height: 1.7rem;
`;

const CommentEllipsis = styled(Ellipsis)`
  position: absolute;
  top: 30px;
  right: 24px;
  width: 1.05rem;
  height: 1.05rem;
  fill: rgb(102, 103, 171, 0.8);
`;
