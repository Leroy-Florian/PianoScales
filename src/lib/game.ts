import {Scale} from '../domain/models/scale';
import {dispatchStore} from '../store/type';
import {addGuessed, addTries, setGameStatus} from '../store/game/slicer';
import {GameStatus} from '../domain/models/game';
import {GameService} from '../domain/services/gameService';
import {currentGuess} from '../domain/models/currentGuess';

const {
  guessIsInScale,
  guessIsAlreadyTried,
  isWinningScale,
  guessIsAlreadyGuessed,
} = GameService;

export const play = (
    currentGuess : currentGuess,
    midi : number,
    scaleToDiscover: Scale,
) : void => {
  console.log('currentGuess', currentGuess);
  console.log('midi', midi);
  console.log('scaletoDiscover', scaleToDiscover);
  if (!guessIsAlreadyTried(currentGuess, midi)) {
    dispatchStore(addTries(midi));
  }
  if (!guessIsAlreadyGuessed(currentGuess, midi) &&
        guessIsInScale(scaleToDiscover, midi)) {
    dispatchStore(addGuessed(midi));
  }
  if (isWinningScale(scaleToDiscover, currentGuess.guessed)) {
    setGameStatus(GameStatus.won);
  }
  // else {
  // incrementCurrentTry();
  //   if (!guessIsAlreadyTried(state.currentGuesses, action.payload)) {
  //     return {...state, currentTry: state.currentTry + 1};
  //   }
  // }
};
