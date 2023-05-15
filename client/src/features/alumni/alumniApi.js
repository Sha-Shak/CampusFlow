import { apiSlice } from '../api/apiSlice';

export const alumniApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    convertToAlumni: builder.mutation({
      query: (data) => ({
        url: `/alumni/convertToAlumni`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useConvertToAlumniMutation } = alumniApi;
