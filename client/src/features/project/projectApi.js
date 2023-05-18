import { apiSlice } from '../api/apiSlice';

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProject: builder.mutation({
      query: (data) => ({
        url: `/projects/addProject/${data.id}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useAddProjectMutation } = projectApi;
