import api from "./api";

export const changePassword = async (data: {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
}) => {
  const response = await api.post("/student/change-password", data);

  return response.data;
};
