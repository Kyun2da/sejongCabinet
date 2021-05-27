import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useUserSelector = (state: RootState) => state.user;
export const useServerSelector = (state: RootState) => state.server;
export const useCabinetSelector = (state: RootState) => state.cabinet;
