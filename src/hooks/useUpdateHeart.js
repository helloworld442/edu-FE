import { useMutation, useQueryClient } from "react-query";
import { createHeart } from "../apis/review";
import { useParams } from "react-router-dom";

export default function useUpdateHeart(queryKey) {
  const { postId } = useParams();
  const queryClient = useQueryClient();

  const heartMutation = useMutation(createHeart, {
    onMutate: async (newPost) => {
      await queryClient.cancelQueries([queryKey, postId]);

      const previousPost = queryClient.getQueryData([queryKey, postId]);

      queryClient.setQueryData([queryKey, postId], {
        ...previousPost,
        heartCheck: !previousPost.heartCheck,
        heartCount: !previousPost.heartCheck
          ? previousPost.heartCount + 1
          : previousPost.heartCount - 1,
      });

      return { previousPost };
    },

    onError: (error, _, context) => {
      queryClient.setQueryData([queryKey, postId], context.previousPost);
    },

    onSettled: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  const onUpdateHeart = (e) => {
    e.preventDefault();

    heartMutation.mutate(postId);
  };

  return onUpdateHeart;
}
