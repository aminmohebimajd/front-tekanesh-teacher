import { create } from "zustand";

import { ApiParams } from "core/types";
import {
  getMonthlyStatus,
  getOverviewStatus,
  getSummaryStatus,
} from "core/services";
import {
  DashboardMonthlyDataTypes,
  DashboardOverviewDataTypes,
  DashboardSummaryDataTypes,
} from "core/types/dashboard.types";

interface Props {
  fetching: boolean;
  hasError: boolean;
  dashOverviewData: DashboardOverviewDataTypes;
  fetchDashOverviewData: (params?: ApiParams) => Promise<void>;
  dashboardSummaryData: DashboardSummaryDataTypes[];
  fetchDashboardSummaryData: (params?: ApiParams) => Promise<void>;
  dashboardMonthlyData: DashboardMonthlyDataTypes;
  fetchDashboardMonthlyData: (
    year: number,
    month: number,
    params?: ApiParams
  ) => Promise<void>;
}

export const useDashboardStore = create<Props>((set) => ({
  dashOverviewData: {
    in_review: 0,
    label: "",
    students_total_income: "",
    unanswered_messages: 0,
  },
  dashboardSummaryData: [
    {
      month: "",
      income: 0,
      sold: 0,
    },
  ],
  dashboardMonthlyData: {
    date: {
      year: 0,
      month: 0,
      month_name: "",
    },
    sold_income: 0,
    webinar_income: 0,
    share_of_students: 0,
  },
  fetching: false,
  hasError: false,
  fetchDashOverviewData: async () => {
    set({ fetching: true, hasError: false });
    try {
      const response = await getOverviewStatus();
      set({
        dashOverviewData: response.data,
        // fetchDashOverviewData: response,
        fetching: false,
      });
    } catch {
      set({ hasError: true, fetching: false });
    }
  },
  fetchDashboardSummaryData: async () => {
    set({ fetching: true, hasError: false });
    try {
      const response = await getSummaryStatus();
      set({
        dashboardSummaryData: response.data,
        fetching: false,
      });
    } catch {
      set({ hasError: true, fetching: false });
    }
  },
  fetchDashboardMonthlyData: async (year: number, month: number) => {
    set({ fetching: true, hasError: false });
    try {
      const response = await getMonthlyStatus(year, month);
      set({
        dashboardMonthlyData: response.data,
        fetching: false,
      });
    } catch {
      set({ hasError: true, fetching: false });
    }
  },
}));
