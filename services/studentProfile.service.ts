import api from "./api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateProfile = async (id: number, data: any) => {
  const response = await api.put(`/students/${id}`, data);

  return response.data;
};
