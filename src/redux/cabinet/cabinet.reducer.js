import { createAction, handleActions } from 'redux-actions';
import cabinetTypes from './cabinet.types';

const initialState = {
  currentCabinets: null,
};

export const setCurrentCabinets = createAction(
  cabinetTypes.SET_CURRENT_CABINETS,
);

const cabinetReducer = handleActions(
  {
    [setCurrentCabinets]: (state, action) => ({
      ...state,
      currentCabinets: action.payload,
    }),
  },
  initialState,
);

export default cabinetReducer;
