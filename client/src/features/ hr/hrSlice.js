import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: undefined,
};

const hrSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    queryResult: (state, action) => {
      state.results = action.payload.results;
    },
  },
});

export const { queryResult } = hrSlice.actions;
export default hrSlice.reducer;
