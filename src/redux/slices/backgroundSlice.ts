import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BackgroundState {
  isRed: boolean;
}

const initialState: BackgroundState = {
  isRed: false,
};

export const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    toggleBackground: state => {
      state.isRed = !state.isRed;
    },
  },
});

export const { toggleBackground } = backgroundSlice.actions;

export default backgroundSlice.reducer;
