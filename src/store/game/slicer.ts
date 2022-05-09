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
      if (action.payload != state.currentGuesses.guessed[state.currentGuesses.guessed.length - 1]) {
        return {
          ...state,
          currentGuesses: {
            ...state.currentGuesses,
            guessed: [...state.currentGuesses.guessed, action.payload],
          },
        };
      }
    },
    addTries: (state, action) => {
      if (action.payload != state.currentGuesses.tries[state.currentGuesses.tries.length - 1]) {
        return {
          ...state,
          currentGuesses: {
            ...state.currentGuesses,
            tries: [...state.currentGuesses.tries, action.payload],
          },
        };
      }
    },
    setGameStatus: (state, action) => {
      return {
        ...state,
        gameStatus: action.payload,
      };
    },
    resetGame: (state) => {
      return {
        ...state,
        ...initialState,
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
  resetGame,
} = GameSlice.actions;

export default GameSlice.reducer;

