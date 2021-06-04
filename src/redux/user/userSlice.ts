import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  uuid: string | null;
  adminType: 0 | 1;
  cabinetIdx: number | null;
  cabinetTitle: number | null;
  name: string;
  studentID: string;
}

interface UserInfo {
  adminType: UserState['adminType'];
  cabinetIdx: UserState['cabinetIdx'];
  cabinetTitle: UserState['cabinetTitle'];
  name: UserState['name'];
  studentID: UserState['studentID'];
}

export const userInitialState: UserState = {
  uuid: null,
  adminType: 0,
  cabinetIdx: null,
  cabinetTitle: null,
  name: '',
  studentID: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUserUID: (state, action: PayloadAction<UserState['uuid']>) => {
      state.uuid = action.payload;
    },
    setUserInfo: (state, { payload: info }: PayloadAction<UserInfo>) => {
      state.adminType = info.adminType;
      state.cabinetIdx = info.cabinetIdx;
      state.cabinetTitle = info.cabinetTitle;
      state.name = info.name;
      state.studentID = info.studentID;
    },
  },
});

export const { setUserUID, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
