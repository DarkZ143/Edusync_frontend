import api from "./api";

export const logoutAdmin = async () => {
    const response = await api.post(
        "/admin/logout"
    );

    return response.data;
};