import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import cabinetReducer from './cabinet/cabinet.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cabinet: cabinetReducer,
  // 다른 리듀서를 만들게되면 여기에 넣어줌
});

export default rootReducer;
