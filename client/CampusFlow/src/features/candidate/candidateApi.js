import { apiSlice } from '../api/apiSlice';

export const candidateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCandidates: builder.query({
      query: () => `/typeform/getAllCandidates`,
    }),
    getCandidateById: builder.query({
      query: (id) => `/typeform/getCandidateById/${id}`,
    }),
    deleteBookingById: builder.mutation({
      query: (id) => ({
        url: `/app/bookings/${id}`,
        method: 'DELETE',
      }),
    }),
    addBookmark: builder.mutation({
      query: (id) => ({
        url: `app/bookmarks/${id}`,
        method: 'POST',
      }),
    }),

    getAllBookmarkedParkings: builder.query({
      query: () => ({
        url: `app/bookmarks/`,
      }),
    }),

    removeBookmark: builder.mutation({
      query: (id) => ({
        url: `app/bookmarks/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetAllCandidatesQuery, useGetCandidateByIdQuery } =
  candidateApi;
