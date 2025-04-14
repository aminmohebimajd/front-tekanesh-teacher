import axiosInstance from "core/config/axios.config";

export const getUsers = async () => {
    const response = await axiosInstance.get("/account/detail/");
    return response.data.results;
};

export const postLogin = async (data: any) => {
    const response = await axiosInstance.post("/account/login/", data);
    return response;
};