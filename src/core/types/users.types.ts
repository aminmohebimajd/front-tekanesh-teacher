export interface ApiParams {
  results?: number;
  nat?: string;
}
export interface ApiResponse {
  results: UsersData;
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export interface UsersData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  nation_code: string;
  birthday: moment.Moment | null;
}

export interface UsersStatistics {
  id: string;
  label: string;
  value: number;
}

export interface UsersMappingResults {
  availableCountries: string[];
  statistics: UsersStatistics[];
}
