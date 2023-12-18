import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getReview } from "../apis/review";

export default function usePost() {
  const { postId } = useParams();
  const { data } = useQuery(["reviews", postId], () => getReview(postId), {
    retry: 0,
    staleTime: 5 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    suspense: true,
  });

  return data;
}
