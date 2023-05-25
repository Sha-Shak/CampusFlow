import { apiSlice } from '../api/apiSlice';

export const hrApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postStackWiseFilter: builder.mutation({
      query: (body) => ({
        url: `hr/stackWiseFilter`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { usePostStackWiseFilterMutation } = hrApi;
