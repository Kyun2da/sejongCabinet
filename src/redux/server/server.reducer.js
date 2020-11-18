import { createAction, handleActions } from 'redux-actions';
import serverTypes from './server.types';

const initialState = {
  status: null,
};

export const setCurrentServer = createAction(serverTypes.SET_CURRENT_SERVERS);

const serverReducer = handleActions(
  {
    [setCurrentServer]: (state, action) => ({
      ...state,
      status: action.payload,
    }),
  },
  initialState,
);

export default serverReducer;
