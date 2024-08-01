import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URl = import.meta.env.VITE_APP_BASE_URL;
// const API_URl = "http://localhost:88000/api";

const baseQuery = fetchBaseQuery({ baseUrl: API_URl + "/api" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
