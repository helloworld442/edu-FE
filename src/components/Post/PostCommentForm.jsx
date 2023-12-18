import styled, { css } from "styled-components";
import { ReactComponent as Pen } from "../../assets/pen-solid.svg";
import useInput from "../../hooks/useInput";
import TextArea from "../@common/TextArea";

export default function PostCommentForm() {
  const [form, onChange, refresh] = useInput({ content: "" });
  return (
    <StPostCommentForm>
      <TextArea
        name="content"
        value={form.content}
        onChange={onChange}
        width="100%"
        height="250px"
      />
      <CommnetFormButton type="submit" $active={!form.content ? true : false}>
        <Pen />
        답변 동록하기
      </CommnetFormButton>
    </StPostCommentForm>
  );
}

const StPostCommentForm = styled.form`
  width: 100%;
  margin: 36px 0;
`;

const CommnetFormButton = styled.button`
  float: right;
  height: 46px;
  padding: 12px 14px;
  margin: 12px 0;
  box-sizing: border-box;
  border: 1px solid rgb(102, 103, 171, 0.8);
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-family: "Noto Sans KR";
  font-size: 0.9rem;
  font-weight: 500;
  color: #fff;
  background: rgb(102, 103, 171, 0.8);
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  svg {
    margin-right: 12px;
    width: 0.95rem;
    height: 0.95rem;
    fill: #fff;
  }

  ${(props) =>
    props.$active &&
    css`
      border: 1px solid #e1e3e7;
      background: #f7f7f8;
      color: #aaacb0;
    `}
`;
