import { create } from "zustand";

import { getOverviewStatus } from "core/services";
import { DashboardOverviewDataTypes } from "core/types/dashboard.types";

interface Props {
    fetching: boolean;
    hasError: boolean;
    dashOverviewData: DashboardOverviewDataTypes;
    fetchDashOverviewData: () => Promise<void>;
}

export const useDashboardStore = create<Props>((set) => ({
    dashOverviewData: {
        in_review: 0,
        label: "",
        students_total_income: "",
        unanswered_messages: 0
    },
    fetching: false,
    hasError: false,
    fetchDashOverviewData: async () => {
        set({ fetching: true, hasError: false });
        try {
            const response = await getOverviewStatus();
            set({
                dashOverviewData: response.data,
                fetching: false,
            });
        } catch {
            set({ hasError: true, fetching: false });
        }
    },
}));
