import { apiSlice } from '../api/apiSlice';
import { queryResult } from './hrSlice';

export const hrApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postStackWiseFilter: builder.mutation({
      query: (body) => ({
        url: `hr/stackWiseFilter`,
        method: 'POST',
        body,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(
            queryResult({
              results: result.data,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
  }),
});

export const { usePostStackWiseFilterMutation } = hrApi;
