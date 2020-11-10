import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root.reducer';

// 하나의 미들웨어를 쓰고있지만 나중에 다른 미들웨어를 쓸 수 있으므로 배열로 만듬
const middlewares = [logger];

// root reducer로 사용하는 store를 만듦 redux devtools로 구성된 미들웨어를 사용함
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
