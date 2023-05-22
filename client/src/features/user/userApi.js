import { apiSlice } from '../api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: `/user/createUser`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
