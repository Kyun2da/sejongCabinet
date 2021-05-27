import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import serverReducer from './server/serverSlice';
import cabinetReducer from './cabinet/cabinetSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    server: serverReducer,
    cabinet: cabinetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
