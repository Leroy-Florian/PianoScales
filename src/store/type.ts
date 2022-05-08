import {Dispatch} from 'react';
import {store} from './root';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export type RootState = ReturnType<typeof store.getState>
export const dispatchStore = store.dispatch as typeof store.dispatch
    | Dispatch<any>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


