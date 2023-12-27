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

      queryClient.setQueryData(["reviews", postId], {
        ...previousPost,
        heartCheck: !previousPost.heartCheck,
        heartCount: !previousPost.heartCheck
          ? previousPost.heartCount + 1
          : previousPost.heartCount - 1,
      });

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
