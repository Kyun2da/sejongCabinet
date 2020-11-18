import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import cabinetReducer from './cabinet/cabinet.reducer';
import serverReducer from './server/server.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cabinet: cabinetReducer,
  server: serverReducer,
  // 다른 리듀서를 만들게되면 여기에 넣어줌
});

export default rootReducer;
