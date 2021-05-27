import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type serverStatusType = 0 | 1; // 1 : 닫힌 상태, 0 : 열린 상태

interface ServerState {
  status: serverStatusType;
}

const initialState: ServerState = {
  status: 0,
};

export const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    setServerStatus: (state, action: PayloadAction<serverStatusType>) => {
      state.status = action.payload;
    },
  },
});

export const { setServerStatus } = serverSlice.actions;

export default serverSlice.reducer;
