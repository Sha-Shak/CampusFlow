import { apiSlice } from '../api/apiSlice';

export const peerRatingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addRating: builder.mutation({
      query: (data) => ({
        url: `peerRating/addRating/${data.id}`,
        method: 'POST',
        body: {
          givenTo: data.givenTo,
          rate: data.rate,
          description: data.description,
        },
      }),
    }),
  }),
});

export const { useAddRatingMutation } = peerRatingApi;
