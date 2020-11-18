import { createAction, handleActions } from 'redux-actions';
import authTypes from './auth.types';

const initialState = {
  currentUser: {
    uid: null,
  },
  currentUserName: null,
  currentUserID: null,
  cabinetTitle: null,
  cabinetIdx: null,
  adminType: null,
};

export const setCurrentUser = createAction(authTypes.SET_CURRENT_USER);
export const setCurrentUserNameAndID = createAction(
  authTypes.SET_CURRENT_USER_NAME_AND_ID,
);
export const clearCurrentUser = createAction(authTypes.CLEAR_CURRENT_USER);

const authReducer = handleActions(
  {
    [setCurrentUser]: (state, action) => ({
      ...state,
      currentUser: action.payload,
    }),
    [setCurrentUserNameAndID]: (state, action) => ({
      ...state,
      currentUserName: action.payload.name,
      currentUserID: action.payload.studentId,
      cabinetTitle: action.payload.cabinetTitle,
      cabinetIdx: action.payload.cabinetIdx,
      adminType: action.payload.adminType,
    }),
    [clearCurrentUser]: (state) => ({
      ...state,
      currentUser: {
        uid: null,
      },
      currentUserName: null,
      currentUserID: null,
      cabinetTitle: null,
      cabinetIdx: null,
      adminType: null,
    }),
  },
  initialState,
);

export default authReducer;
