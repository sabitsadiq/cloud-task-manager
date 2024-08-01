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
    createTask: builder.mutation({
      query: (data) => ({
        url: `${Tasks_URL}/`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    createTask: builder.mutation({
      query: (data) => ({
        url: `${Tasks_URL}/create`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    duplicateTask: builder.mutation({
      query: (id) => ({
        url: `${Tasks_URL}/duplicate/${id}`,
        method: "POST",
        body: {},
        credentials: "include",
      }),
    }),
    updateTask: builder.mutation({
      query: (data) => ({
        url: `${Tasks_URL}/update/${data_id}`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useGetAllTaskQuery,
  useCreateTaskMutation,
  useDuplicateTaskMutation,
  useUpdateTaskMutation,
} = taskApiSlice;
