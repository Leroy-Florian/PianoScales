import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Settings} from '../../domain/models/settings';
import {EASY_MODE} from '../../constants/setting';

const initialState: Settings = {
  scale: {
    Major: {
      C: true,
      Cs: false,
      D: true,
      E: true,
      F: false,
      G: false,
      A: false,
      B: false,
    },
    MinorHarmonic: {
      Cm: false,
      Dm: false,
      Em: false,
      Fm: false,
      Gm: false,
      Am: false,
      Bm: false,
    },
  },
  gameMode: EASY_MODE,
  userSettings: {
    firstTime: true,
    dailyChallenge: false,
    dailyObjectives: 0,
  },
};


const SettingSlice = createSlice({
  name: 'settingStore',
  initialState: initialState,
  reducers: {
    toggleMajorScale: (state, action) => {
      return {
        ...state,
        scale: {
          ...state.scale,
          Major: {
            ...state.scale.Major,
            [action.payload]: !state.scale.Major[action.payload as keyof typeof state.scale.Major],
          },
        },
      };
    },
    toggleFirstTime: (state ) => {
      return {
        ...state,
        userSettings: {
          ...state.userSettings,
          firstTime: !state.userSettings.firstTime,
        },
      };
    },
    setGameMode: (state, action) => {
      return {
        ...state,
        gameMode: action.payload,
      };
    },
  },
});

export const {
  toggleMajorScale,
  toggleFirstTime,
  setGameMode,
} = SettingSlice.actions;

export default SettingSlice.reducer;

