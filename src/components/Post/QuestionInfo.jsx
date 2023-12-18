import styled from "styled-components";
import { ReactComponent as Pen } from "../../assets/pen-solid.svg";
import { ReactComponent as Heart } from "../../assets/heart-solid.svg";
import useUpdateHeart from "../../hooks/useUpdateHeart";

export default function QuestionInfo({ post }) {
  const onUpdateHeart = useUpdateHeart();

  return (
    <QuestionPostInfo>
      <PostInfoDate>
        {new Date(post.createdAt).toLocaleDateString("ko-KR")}
      </PostInfoDate>
      <PostInfoHeart onClick={onUpdateHeart}>
        <Heart />
        저도 궁금해요 {post.heartCount}
      </PostInfoHeart>
      <PostInfoWrite>
        <Pen />
        답변하기
      </PostInfoWrite>
    </QuestionPostInfo>
  );
}

const QuestionPostInfo = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostInfoDate = styled.h5`
  font-size: 0.85rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: #888;
`;

const PostInfoHeart = styled.span`
  position: absolute;
  right: 120px;
  height: 46px;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR";
  font-size: 0.85rem;
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

const PostInfoWrite = styled.a`
  position: absolute;
  right: 0;
  height: 46px;
  padding: 12px 14px;
  box-sizing: border-box;
  border: 1px solid rgb(102, 103, 171, 0.8);
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR";
  font-size: 0.85rem;
  color: #fff;
  background: rgb(102, 103, 171, 0.8);
  cursor: pointer;

  svg {
    margin-right: 12px;
    width: 0.95rem;
    height: 0.95rem;
    fill: #fff;
  }

  &:hover {
    opacity: 0.9;
  }
`;
