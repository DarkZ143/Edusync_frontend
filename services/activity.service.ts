import api from "./api";

export const getActivities = async () => {
  const response = await api.get("/admin/activity");

  return response.data;
};
