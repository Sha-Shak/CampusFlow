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

    getGithubOrgRepos: builder.query({
      query: () => ({
        url: `/github/getGithubOrgRepos`,
        method: 'GET',
      }),
    }),

    getAccessToGithubRepo: builder.mutation({
      query: (data) => ({
        url: `/github/getAccessToGithubRepo`,
        method: 'POST',
        body: data,
      }),
    }),

    removeAccessToGithubRepo: builder.mutation({
      query: (data) => ({
        url: `/github/removeAccessToGithubRepo`,
        method: 'POST',
        body: data,
      }),
    }),

    deleteStudentFromCohort: builder.mutation({
      query: (data) => ({
        url: `/github/deleteStudentFromCohort`,
        method: 'DELETE',
        body: data,
      }),
    }),
  }),
});

export const {
  useAddStudentToGithubCohortMutation,
  useAddGithubCohortMutation,
  useGetAllGithubCohortsQuery,
  useGetGithubOrgReposQuery,
  useRemoveAccessToGithubRepoMutation,
  useGetAccessToGithubRepoMutation,
  useDeleteStudentFromCohortMutation,
} = githubApi;
