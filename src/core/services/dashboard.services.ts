import axiosInstance from "core/config/axios.config";

export const getOverviewStatus = async () => {
    const response = await axiosInstance.get("account/teacher/dashboard/?action=overview_stat");
    return response.data;
};
