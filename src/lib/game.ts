import {useAppDispatch} from '../store/type';
import {addGuessed, addTries, incrementCurrentTry} from '../store/game/slicer';
import {Game} from '../domain/models/game';
import {GameService} from '../domain/services/gameService';

const {
  guessIsInScale,
  guessIsAlreadyTried,
  guessIsAlreadyGuessed,
} = GameService;

export const play = (
    midi : number,
    game : Game,
) : void => {
  const dispatchStore = useAppDispatch();

  if (!guessIsAlreadyTried(game.currentGuesses, midi)) {
    dispatchStore(addTries(midi));
  }
  if (!guessIsAlreadyGuessed(game.currentGuesses, midi) &&
        guessIsInScale(game.scaleToDiscover, midi)) {
    dispatchStore(addGuessed(midi));
  }
  if (!guessIsAlreadyGuessed(game.currentGuesses, midi) &&
      !guessIsInScale(game.scaleToDiscover, midi)) {
    dispatchStore(incrementCurrentTry());
  }
};
