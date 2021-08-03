import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import serverReducer from './server/serverSlice';
import cabinetReducer from './cabinet/cabinetSlice';
import descriptionReducer from './description/descriptionSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    server: serverReducer,
    cabinet: cabinetReducer,
    description: descriptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
