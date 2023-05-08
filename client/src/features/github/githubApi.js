import { apiSlice } from '../api/apiSlice';

export const githubApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCohorts: builder.query({
      query: () => ({
        url: `/github/getAllCohorts/`,
      }),
    }),

    addStudentToCohort: builder.mutation({
      query: (data) => ({
        url: `/github/addStudentToCohort/`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useGetAllCohortsQuery, useAddStudentToCohortMutation } =
  githubApi;
