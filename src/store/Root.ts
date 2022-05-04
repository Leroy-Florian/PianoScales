import {persist, persistConfig} from './Persist';
import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import modalReducer from './Modal/Slicer';
import settingsReducer from './Settings/Slicer';
import gameReducer from './Game/Slicer';
import pianoReducer from './Piano/Slicer';
import {persistStore} from 'redux-persist';


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
});


export const persistor = persistStore(store);

