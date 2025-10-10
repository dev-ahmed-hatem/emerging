import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  tagTypes: [
    "User",
    "PermissionsList"
  ],
  keepUnusedDataFor: 180,
  refetchOnReconnect: true,
});

export default api;
