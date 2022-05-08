import {persist, persistConfig} from './persist';
import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import modalReducer from './modal/slicer';
import settingsReducer from './settings/slicer';
import gameReducer from './game/slicer';
import pianoReducer from './piano/slicer';
import {persistStore} from 'redux-persist';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';


export const store = configureStore({
  reducer: {
    persistedStore: combineReducers({
      settingsStore: persist(persistConfig('settingsStore'), settingsReducer),
      gameStore: persist(persistConfig('gameStore'), gameReducer),
    }),
    nonPersistedStore: combineReducers({
      modalStore: modalReducer,
      pianoStore: pianoReducer,
    }),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);

