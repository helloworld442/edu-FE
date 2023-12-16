import { useMutation, useQueryClient } from "react-query";
import { updateReview } from "../apis/review";
import { useParams } from "react-router-dom";

export default function useUpdateValue(req) {
  const { postId } = useParams();
  const queryClient = useQueryClient();

  const updateMutation = useMutation(updateReview, {
    onMutate: async (newPost) => {
      await queryClient.cancelQueries(["reviews", postId]);

      const previousPost = queryClient.getQueryData(["reviews", postId]);

      queryClient.setQueryData(["reviews", postId], newPost.req);

      return { previousPost };
    },

    onError: (error, _, context) => {
      queryClient.setQueryData(["reviews", postId], context.previousPost);
    },

    onSettled: () => {
      queryClient.invalidateQueries("reviews");
    },
  });

  const onUpdateValue = (e) => {
    e.preventDefault();

    updateMutation.mutate({ postId, req });
  };

  return onUpdateValue;
}
