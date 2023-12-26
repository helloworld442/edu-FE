import { useMutation, useQueryClient } from "react-query";
import { createHeart } from "../apis/review";
import { useParams } from "react-router-dom";

export default function useUpdateHeart() {
  const { postId } = useParams();
  const queryClient = useQueryClient();

  const heartMutation = useMutation(createHeart, {
    onMutate: async (newPost) => {
      await queryClient.cancelQueries(["reviews", postId]);

      const previousPost = queryClient.getQueryData(["reviews", postId]);

      console.log(previousPost, newPost);

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

  const onUpdateHeart = (e) => {
    e.preventDefault();

    heartMutation.mutate(postId);
  };

  return onUpdateHeart;
}
