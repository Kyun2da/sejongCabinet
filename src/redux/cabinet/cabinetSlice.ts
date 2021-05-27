import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CabinetType = {
  cabinet: CabinetTabType[] | null;
};

type CabinetTabType = {
  width: number;
  height: number;
  title: string;
  item: CabinetItemType[];
};

type CabinetItemType = {
  status: number;
  uuid?: string;
  studentId?: string;
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
