import api from "./api";
import { LoginResponse } from "@/types/auth";

export const adminLogin = async (email: string, password: string) => {
  const response = await api.post<LoginResponse>("/admin/login", {
    email,
    password,
  });

  return response.data;
};
