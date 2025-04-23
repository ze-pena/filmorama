import { createSlice } from '@reduxjs/toolkit';
import { Action } from '@interfaces/Redux';

const initialState = {
  name: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchName: (state, { payload }: Action<string>): void => {
      state.name = payload;
    },
  },
});

export const { updateSearchName } = searchSlice.actions;
export default searchSlice.reducer;
