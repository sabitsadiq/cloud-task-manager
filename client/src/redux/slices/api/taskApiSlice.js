import { apiSlice } from "../apiSlice";

const Tasks_URL = "/task";

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => ({
        url: `${Tasks_URL}/dashboard`,
        method: "GET",
        credentials: "include",
      }),
    }),
    getAllTask: builder.query({
      query: ({ strQuery, isTrashed, search }) => ({
        url: `${Tasks_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetDashboardStatsQuery, useGetAllTaskQuery } = taskApiSlice;
