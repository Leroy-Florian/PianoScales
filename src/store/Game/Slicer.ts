import {createSlice} from '@reduxjs/toolkit';
import {Scale} from '../../constants/validGuesses';
type gameState= {
  isGameWon: false,
  isGameLost: false,
  currentGuesses: Scale[],
  guesses: [],
  currentTry: 0,
}
const initialState :gameState ={
  isGameWon: false,
  isGameLost: false,
  currentGuesses: [],
  guesses: [],
  currentTry: 0,
};

const GameSlice = createSlice({
  name: 'gameStore',
  initialState: initialState,
  reducers: {
    setGameWon: (state, action) => {
      return {
        ...state,
        isGameWon: action.payload,
      };
    },
    setGameLost: (state, action) => {
      return {
        ...state,
        isGameLost: action.payload,
      };
    },
    setCurrentGuesses: (state, action) => {
      return {
        ...state,
        currentGuesses: action.payload,
      };
    },
    setGuesses: (state, action) => {
      return {
        ...state,
        guesses: action.payload,
      };
    },
    setCurrentTry: (state, action) => {
      return {
        ...state,
        currentTry: action.payload,
      };
    },
  },
});

export const {
  setGameWon,
  setGameLost,
  setCurrentGuesses,
  setGuesses,
  setCurrentTry,
} = GameSlice.actions;
export default GameSlice.reducer;

