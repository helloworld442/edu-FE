import styled from "styled-components";
import QuestionTitle from "./QuestionTitle";
import QuestionInfo from "./QuestionInfo";
import QuestionCode from "./QuestionCode";
import QuestionDesc from "./QuestionDesc";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getReview } from "../../apis/review";

const PostQuestion = () => {
  const post = usePost();

  return (
    <StQuestionPost>
      <QuestionTitle post={post} />
      <QuestionCode post={post} />
      <QuestionDesc post={post} />
      <QuestionInfo post={post} />
    </StQuestionPost>
  );
};

function usePost() {
  const { postId } = useParams();
  const { data } = useQuery(["reviews", postId], () => getReview(postId), {
    retry: 0,
    staleTime: 5 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    suspense: true,
  });

  return data;
}

const StQuestionPost = styled.div`
  position: relative;
  width: 100%;
`;

export default PostQuestion;
