import api from "./instance";

const createComment = async ({ postId, req }) => {
  const response = await api.post("/api/codeReview/comment/" + postId, req);

  return response.data;
};

export { createComment };
