import api from "./api";

export const getNotifications = async () => {
  const response = await api.get("/admin/notifications");

  return response.data;
};

export const markNotificationRead = async (id: number) => {
  const response = await api.put(`/admin/notifications/${id}/read`);

  return response.data;
};
