import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URl = "http://localhost:88000/api";

const baseQuery = fetchBaseQuery;
({ baseUrl: API_URl });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builders) => ({}),
});
