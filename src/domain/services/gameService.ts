import {Scale} from '../models/scale';
import {currentGuess} from '../models/currentGuess';
import {IGameService} from '../ports/gamePorts';
import {commonsTools} from './commonsTools';


const isWinningScale = (scaleToDiscover : Scale, scale: number[]): boolean => {
  return commonsTools.arraysAreEqual(scaleToDiscover.notes, scale);
};

const guessIsInScale = (scaleToDiscover : Scale, guess: number): boolean => {
  return scaleToDiscover.notes.includes(guess);
};

const guessIsAlreadyTried = (guesses: currentGuess, guess: number): boolean => {
  return guesses.tries.includes(guess);
};

const guessIsAlreadyGuessed = (guesses: currentGuess, guess: number): boolean => {
  return guesses.guessed.includes(guess);
};


export const GameService : IGameService= {
  isWinningScale,
  guessIsInScale,
  guessIsAlreadyTried,
  guessIsAlreadyGuessed,
};
