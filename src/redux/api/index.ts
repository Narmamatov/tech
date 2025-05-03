import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api-crud.elcho.dev/api/v1/1cd3f-5a77a-e8780/techno",
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOption) => {
  const result = await baseQuery(args, api, extraOption);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  refetchOnReconnect: true,
  refetchOnFocus: true,
  baseQuery: baseQueryExtended,
  tagTypes: [""],
  endpoints: (builder) => ({}),
});
