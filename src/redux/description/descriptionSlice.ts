import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type descriptionModeType = string; // number : 사물함 번호 , name : 이름 , studentID : 학번

interface DescriptionState {
  descriptionMode: descriptionModeType;
}

const initialState: DescriptionState = {
  descriptionMode: 'number',
};

export const descriptionSlice = createSlice({
  name: 'description',
  initialState,
  reducers: {
    setDescriptionMode: (state, action: PayloadAction<descriptionModeType>) => {
      state.descriptionMode = action.payload;
    },
  },
});

export const { setDescriptionMode } = descriptionSlice.actions;

export default descriptionSlice.reducer;
