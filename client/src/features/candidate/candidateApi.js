import { apiSlice } from '../api/apiSlice';

export const candidateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCandidates: builder.query({
      query: () => `/typeform/getAllCandidates`,
    }),
    getCandidateById: builder.query({
      query: (id) => `/typeform/getCandidateById/${id}`,
    }),
  }),
});

export const { useGetAllCandidatesQuery, useGetCandidateByIdQuery } =
  candidateApi;
