import api from "./instance";

const getReviews = async () => {
  const response = await api.get("/codeReview?page=1&size=10");
  return response.data;
};

const getReview = async (req) => {
  const response = await api.get("/codeReview/" + req);
  return response.data;
};

export { getReviews, getReview };
