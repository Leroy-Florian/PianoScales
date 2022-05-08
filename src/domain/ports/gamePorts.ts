import {Scale} from '../models/scale';
import {currentGuess} from '../models/currentGuess';

export interface IGameService {
    isWinningScale : (scaleToDiscover : Scale, scale: number[]) => boolean;
    guessIsInScale : (scaleToDiscover : Scale, guess: number) => boolean;
    guessIsAlreadyTried : (guesses: currentGuess, guess: number) => boolean;
    guessIsAlreadyGuessed : (guesses: currentGuess, guess: number) => boolean;
}
