import api from "./instance";

const getComments = async (postId) => {
  const response = await api.get("/api/codeReview/comment/" + postId);

  return response.data;
};

const createComment = async ({ postId, req }) => {
  const response = await api.post("/api/codeReview/comment/" + postId, req);

  return response.data;
};

export { getComments, createComment };
