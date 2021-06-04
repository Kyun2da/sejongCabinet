import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CabinetType = {
  cabinet: CabinetTabType[] | null;
};

export type CabinetTabType = {
  width: number;
  height: number;
  title: string;
  item: CabinetItemType[];
};

export type CabinetItemType = {
  status: number;
  uuid?: string;
  studentID?: string;
  name?: string;
};

const initialState: CabinetType = {
  cabinet: null,
};

export const cabinetSlice = createSlice({
  name: 'cabinet',
  initialState,
  reducers: {
    setCabinet: (state, action: PayloadAction<CabinetTabType[]>) => {
      state.cabinet = action.payload;
    },
  },
});

export const { setCabinet } = cabinetSlice.actions;

export default cabinetSlice.reducer;
