import {createSlice} from '@reduxjs/toolkit';
import {VALID_MAJOR_SCALE} from '../../constants/validGuesses';

import {Game, GameStatus} from '../../domain/models/game';


const initialState: Game = {
  gameStatus: GameStatus.notStarted,
  scaleToDiscover: VALID_MAJOR_SCALE[0],
  currentGuesses: {
    tries: [],
    guessed: [],
  },
  currentTry: 0,
};

const GameSlice = createSlice({
  name: 'gameStore',
  initialState: initialState,
  reducers: {
    setScaleToDiscover: (state, action) => {
      return {
        ...state,
        scaleToDiscover: action.payload,
      };
    },
    addGuessed: (state, action) => {
      return {
        ...state,
        currentGuesses: {
          ...state.currentGuesses,
          guessed: [...state.currentGuesses.guessed, action.payload],
        },
      };
    },
    addTries: (state, action) => {
      return {
        ...state,
        currentGuesses: {
          ...state.currentGuesses,
          tries: [...state.currentGuesses.tries, action.payload],
        },
      };
    },
    setGameStatus: (state, action) => {
      return {
        ...state,
        gameStatus: action.payload,
      };
    },
    incrementCurrentTry: (state) => {
      return {
        ...state,
        currentTry: state.currentTry + 1,
      };
    },
  },
});


export const {
  setScaleToDiscover,
  addGuessed,
  addTries,
  setGameStatus,
  incrementCurrentTry,
} = GameSlice.actions;

export default GameSlice.reducer;

