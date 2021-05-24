import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ServerState {
  status: number | undefined;
}

const initialState: ServerState = {
  status: undefined,
};

export const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    setServerStatus: (state, action: PayloadAction<number | undefined>) => {
      state.status = action.payload;
    },
  },
});

export const { setServerStatus } = serverSlice.actions;

export default serverSlice.reducer;
