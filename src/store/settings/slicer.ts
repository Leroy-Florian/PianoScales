import {createSlice} from '@reduxjs/toolkit';
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
    toggleMinorHarmonicScale: (state, action) => {
      return {
        ...state,
        scale: {
          ...state.scale,
          MinorHarmonic: {
            ...state.scale.MinorHarmonic,
            [action.payload]: !state.scale.MinorHarmonic[action.payload as keyof typeof state.scale.MinorHarmonic],
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
  toggleMinorHarmonicScale,
  toggleFirstTime,
  setGameMode,
} = SettingSlice.actions;

export default SettingSlice.reducer;

