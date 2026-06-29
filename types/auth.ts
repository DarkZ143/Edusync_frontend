export interface Admin {
  id: number;
  name: string;
  email: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  admin: Admin;
}