import { apiSlice } from '../api/apiSlice';

export const githubApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addStudentToGithubCohort: builder.mutation({
      query: (data) => ({
        url: `/github/addStudentToCohort/`,
        method: 'PUT',
        body: data,
      }),
    }),
    addGithubCohort: builder.mutation({
      query: (data) => ({
        url: `/github/addCohort/`,
        method: 'POST',
        body: data,
      }),
    }),
    getAllGithubCohorts: builder.query({
      query: () => ({
        url: `/github/getAllCohorts`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useAddStudentToGithubCohortMutation,
  useAddGithubCohortMutation,
  useGetAllGithubCohortsQuery,
} = githubApi;
