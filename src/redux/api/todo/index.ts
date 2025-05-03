import { api as data } from "..";

const api = data.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<TODO.GetTodosResponse, TODO.GetTodosRequest>({
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetTodosQuery } = api;
