import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import serverReducer from './server/serverSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    server: serverReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
