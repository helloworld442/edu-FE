import styled, { css } from "styled-components";
import { ReactComponent as Pen } from "../../assets/pen-solid.svg";
import useInput from "../../hooks/useInput";
import TextArea from "../@common/TextArea";
import { useMutation, useQueryClient } from "react-query";
import { createComment } from "../../apis/comment";
import { useParams } from "react-router-dom";

export default function PostCommentForm() {
  const [form, onChange, refresh] = useInput({ content: "" });

  const { postId } = useParams();
  const queryClient = useQueryClient();

  const commentMutation = useMutation(createComment, {
    onMutate: async (newComment) => {
      await queryClient.cancelQueries(["comments", postId]);

      const previousComment = queryClient.getQueryData(["comments", postId]);

      queryClient.setQueryData(["comments", postId], {
        ...newComment.req,
        heartCount: 0,
        heartCheck: false,
      });

      return { previousComment };
    },

    onError: (error, _, context) => {
      queryClient.setQueryData(["comments", postId], context.previousComment);
    },

    onSettled: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    commentMutation.mutate({ postId, req: form });

    refresh();
  };

  return (
    <StPostCommentForm onSubmit={onSubmit}>
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
  fill: #fff;
  background: rgb(102, 103, 171, 1);
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  svg {
    margin-right: 12px;
    width: 0.95rem;
    height: 0.95rem;
  }

  &:hover {
    opacity: 0.9;
  }

  ${(props) =>
    props.$active &&
    css`
      cursor: not-allowed;
      border: 1px solid #e1e3e7;
      background: #f7f7f8;
      color: #aaacb0;
      fill: #aaacb0;
    `}
`;
