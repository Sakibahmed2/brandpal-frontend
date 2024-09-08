import { baseApi } from "./baseApi.js";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (userData) => ({
        url: "/user/create-user",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = authApi;
