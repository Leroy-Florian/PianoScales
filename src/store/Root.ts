import {persist, persistConfig} from "./Persist";
import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import modalReducer from './Modal/Slicer';
import settingsReducer from './Settings/Slicer';
import gameReducer from './Game/Slicer';
import statsReducer from './Stats/Slicer';
import {persistStore} from 'redux-persist';



export const store = configureStore({
    reducer: {
      persistedStore: combineReducers({
            modalStore : persist(persistConfig('modalStore'), modalReducer),
            settingsStore : persist(persistConfig('settingsStore'), settingsReducer),
            gameStore : persist(persistConfig('gameStore'), gameReducer),
            statsStore : persist(persistConfig('statsStore'), statsReducer),
    }),
    },
})



export const persistor = persistStore(store);
