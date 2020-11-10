import { createAction, handleActions } from 'redux-actions';
import authTypes from './auth.types';

const initialState = {
  currentUser: null,
  currentUserName: null,
  currentUserID: null,
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
    }),
    [clearCurrentUser]: (state) => ({ ...state, currentUser: null }),
  },
  initialState,
);

export default authReducer;
