import api from "./instance";

const getComments = async (postId) => {
  const response = await api.get("/codeReview/comment/" + postId);

  return response.data;
};

const createComment = async ({ postId, req }) => {
  const response = await api.post("/codeReview/comment/" + postId, req);

  return response.data;
};

export { getComments, createComment };
