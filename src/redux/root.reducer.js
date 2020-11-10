import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // 다른 리듀서를 만들게되면 여기에 넣어줌
});

export default rootReducer;
