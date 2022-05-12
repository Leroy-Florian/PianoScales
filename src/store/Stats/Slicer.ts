import {createSlice} from '@reduxjs/toolkit';
import {Stats} from '../../domain/models/Stats';
import {StatsService} from '../../domain/services/StatsService';


const initialState: Stats = {
  winDistribution: [],
  gamesFailed: 0,
  currentStreak: 0,
  bestStreak: 0,
  totalGames: 0,
  successRate: 0,
};

const {getSuccessRate} = StatsService;

const StatsSlice = createSlice({
  name: 'statsStore',
  initialState: initialState,
  reducers: {
    addWin: (state) => {
      return {
        ...state,
        winDistribution: [...state.winDistribution, 1],
        currentStreak: state.currentStreak + 1,
        totalGames: state.totalGames + 1,
      };
    },
    addLoss: (state) => {
      return {
        ...state,
        winDistribution: [...state.winDistribution, 0],
        totalGames: state.totalGames + 1,
        gamesFailed: state.gamesFailed + 1,
      };
    },

    updateSuccessRate: (state) => {
      return {...state, successRate: getSuccessRate(state)};
    },
    updateBestStreak: (state) => {
      // todo also check with winDistribution
      if (state.currentStreak > state.bestStreak) {
        return {...state, bestStreak: state.currentStreak};
      }
    },
  },
});

export const {
  addWin,
  addLoss,
  updateSuccessRate,
  updateBestStreak,
} = StatsSlice.actions;
export default StatsSlice.reducer;


