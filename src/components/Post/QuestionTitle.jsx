import styled from "styled-components";
import PostModal from "./PostModal";
import { ReactComponent as PenSquare } from "../../assets/pen-to-square-regular.svg";
import { ReactComponent as Ellipsis } from "../../assets/ellipsis-vertical-solid.svg";
import useToggle from "../../hooks/useToggle";
import useInput from "../../hooks/useInput";
import useUpdateValue from "../../hooks/useUpdateValue";
import useDeleteValue from "../../hooks/useDeleteValue";

export default function QuestionTitle({ post }) {
  const [form, onChange] = useInput(post);

  const onUpdateValue = useUpdateValue(form);
  const onDeleteValue = useDeleteValue();

  const [disabled, onClick, onKeyDown] = useToggle({ trigger: onUpdateValue });

  return (
    <StQuestionTitle>
      <QuestionPostTitle
        type="text"
        name="title"
        value={form.title}
        onChange={onChange}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />

      <QuestionPostView>
        <h6>
          추천 <span>{post.heartCount}</span>
        </h6>
        <h6>
          조회 <span>{post.views}</span>
        </h6>
      </QuestionPostView>

      {/* {disabled && <QuestionPostPen onClick={onClick} />} */}

      <PostModal trigger={<QuestionPostEllipsis />} onTrigger={onDeleteValue} />
    </StQuestionTitle>
  );
}

const StQuestionTitle = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #e1e7eb;
`;

const QuestionPostTitle = styled.input`
  width: 650px;
  margin-top: 3px;
  box-sizing: border-box;
  font-size: 1.35rem;
  font-weight: 550;
  font-family: "Noto Sans KR";

  &:disabled {
    border: none;
    outline: none;
    background: #fff;
    color: #333;
  }

  &:enabled {
    margin-bottom: 3px;
    border: none;
    outline: 3px dashed rgb(102, 103, 171, 1);
    background: #fefefe;
    color: #444;
  }
`;

const QuestionPostPen = styled(PenSquare)`
  position: absolute;
  top: 9px;
  right: 48px;
  width: 1.2rem;
  height: 1.2rem;
  fill: #888;
  cursor: pointer;

  &:hover {
    fill: rgb(102, 103, 171, 1);
  }
`;

const QuestionPostEllipsis = styled(Ellipsis)`
  position: absolute;
  top: 8px;
  right: 0;
  width: 1.2rem;
  height: 1.2rem;
  fill: rgb(102, 103, 171, 1);
`;

const QuestionPostView = styled.div`
  padding-top: 8px;
  padding-bottom: 20px;
  display: flex;
  gap: 8px;

  h6 {
    font-size: 0.85rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: rgb(157, 167, 174);
  }

  span {
    display: inline-block;
    margin-left: 2px;
    color: rgb(102, 103, 171, 1);
  }
`;
