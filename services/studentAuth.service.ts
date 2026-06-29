import api from "./api";

export const studentLogin = async (
    email: string,
    password: string
) => {

    const response = await api.post(
        "/login",
        {
            email,
            password,
        }
    );

    return response.data;
};