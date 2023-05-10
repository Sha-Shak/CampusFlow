import { apiSlice } from '../api/apiSlice';

export const cohortApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCohort: builder.query({
      query: () => ({
        url: `/cohort/getAllCohort`,
        method: 'GET',
      }),
    }),
    getCohortByName: builder.query({
      query: (cohortName) => ({
        url: `/cohort/${cohortName}`,
        method: 'GET',
      }),
    }),
    createCohort: builder.mutation({
      query: (data) => ({
        url: `/cohort/createCohort`,
        method: 'POST',
        body: data,
      }),
    }),
    changeCohortStatus: builder.mutation({
      query: (data) => ({
        url: `/cohort/${data.cohortName}`,
        method: 'PUT',
        body: data,
      }),
    }),
    addStudentToCohort: builder.mutation({
      query: (data) => ({
        url: `/cohort/${data.cohortName}/add-student`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllCohortQuery,
  useGetCohortByNameQuery,
  useAddStudentToCohortMutation,
  useChangeCohortStatusMutation,
  useCreateCohortMutation,
} = cohortApi;
