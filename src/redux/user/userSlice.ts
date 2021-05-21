import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  uuid: string | undefined;
  adminType: 0 | 1;
  cabinetIdx: number;
  cabinetTitle: string;
  name: string;
  studentID: number;
}

const initialState: UserState = {
  uuid: '',
  adminType: 0,
  cabinetIdx: 0,
  cabinetTitle: '',
  name: '',
  studentID: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserUID: (state, action: PayloadAction<string | undefined>) => {
      state.uuid = action.payload;
    },
  },
});

export const { setUserUID } = userSlice.actions;

export default userSlice.reducer;
