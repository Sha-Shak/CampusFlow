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
    getAlumniById: builder.query({
      query: (id) => `/alumni/getAlumniById/${id}`,
    }),

    addAlumniInfo: builder.mutation({
      query: (data) => ({
        url: `/alumni/postInfo/${data.id}/?type=${data.type}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useConvertToAlumniMutation,
  useGetAlumniByIdQuery,
  useAddAlumniInfoMutation,
} = alumniApi;
