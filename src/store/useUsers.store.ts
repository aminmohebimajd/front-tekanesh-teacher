import { create } from "zustand";

import { ApiParams, UsersData } from "core/types";
import { getUser } from "core/services";

interface Props {
    fetching: boolean;
    hasError: boolean;
    userData: any;
    fetchUserData: (params?: ApiParams) => Promise<void>;
}

export const useUsersStore = create<Props>((set) => ({
    userData: {},
    fetching: false,
    hasError: false,
    fetchUserData: async () => {
        set({ fetching: true, hasError: false });
        try {
            const response = await getUser();
            set({
                userData: response.data,
                fetchUserData: response,
                fetching: false,
            });
        } catch {
            set({ hasError: true, fetching: false });
        }
    }
}));
