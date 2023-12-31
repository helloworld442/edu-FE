import styled, { css } from "styled-components";
import { ReactComponent as Heart } from "../../assets/heart-solid.svg";
import { ReactComponent as Ellipsis } from "../../assets/ellipsis-vertical-solid.svg";
import { useMutation, useQueryClient } from "react-query";
import { updateHeart } from "../../apis/comment";
import { useParams } from "react-router-dom";

export default function PostComment({ comment }) {
  const { postId } = useParams();
  const queryClient = useQueryClient();

  const heartMutation = useMutation(updateHeart, {
    onMutate: async () => {
      await queryClient.cancelQueries(["comments", postId]);

      queryClient.setQueryData(["comments", postId], (old) =>
        old.map((item) => {
          if (item.commentId === comment.commentId) {
            return {
              ...comment,
              heartCheck: !comment.heartCheck,
              heartCount: !comment.heartCheck
                ? comment.heartCount + 1
                : comment.heartCount - 1,
            };
          }

          return item;
        })
      );

      return;
    },

    onError: (error) => {
      queryClient.setQueryData(["comments", postId], comment);
    },

    onSettled: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const onUpdateHeart = (e) => {
    e.preventDefault();

    heartMutation.mutate({ postId, commentId: comment.commentId });
  };

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
      <CommnetContent>{comment.content}</CommnetContent>
      <CommentHeart $active={comment.heartCheck} onClick={onUpdateHeart}>
        <Heart />
        도움이 됐어요 {comment.heartCount}
      </CommentHeart>
    </StPostComment>
  );
}

const StPostComment = styled.li`
  position: relative;
  width: 100%;
  min-height: 200px;
  padding: 26px 20px;
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
  bottom: 20px;
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
    opacity: 0.9;
  }

  ${(props) =>
    props.$active &&
    css`
      border: 1px solid rgb(102, 103, 171, 1);
      color: rgb(102, 103, 171, 1);
      fill: rgb(102, 103, 171, 1);
    `}
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
