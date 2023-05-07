import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = localStorage.getItem('github-access-token');
      console.log('api', token);

      if (token) {
        headers.set(
          'github-access-token',
          `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`
        );
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
