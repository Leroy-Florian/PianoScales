import {store} from './root';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AnyAction} from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch &
    ((actions: AnyAction[]) => AnyAction[]);

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
