import reducer, {
  addGuessed, addTries, incrementCurrentTry, setGameStatus,
  setScaleToDiscover,
} from '../store/game/slicer';
import {VALID_MAJOR_SCALE} from '../constants/validGuesses';
import {Game, GameStatus} from '../domain/models/game';

const defaultState: Game = {
  gameStatus: GameStatus.ongoing,
  scaleToDiscover: VALID_MAJOR_SCALE[0],
  currentGuesses: {
    tries: [],
    guessed: [],
  },
  currentTry: 0,
};


test('Should set the new Scale to discover', () => {
  const previousState = {...defaultState, scaleToDiscover: VALID_MAJOR_SCALE[5]};
  expect(reducer(previousState, setScaleToDiscover(VALID_MAJOR_SCALE[0])))
      .toEqual({...previousState, scaleToDiscover: VALID_MAJOR_SCALE[0]} as Game);
});

test('default state should not be modified', () => {
  expect(reducer(defaultState, setScaleToDiscover(VALID_MAJOR_SCALE[0])))
      .toEqual(defaultState);
});

test('add guess to currentGuesses', () => {
  expect(reducer(defaultState, addGuessed(5)))
      .toEqual({...defaultState, currentGuesses: {...defaultState.currentGuesses, guessed: [5]}} as Game);
});

test('should push guess to currentGuesses', () => {
  const previousState = {
    ...defaultState,
    currentGuesses: {
      ...defaultState.currentGuesses,
      guessed: [5],
    },
  };

  expect(reducer(previousState, addGuessed(4)))
      .toEqual({
        ...previousState,
        currentGuesses: {
          ...previousState.currentGuesses,
          guessed: [5, 4]},
      } as Game,
      );
});


test('should add tries to currentGuesses', () => {
  const previousState = {
    ...defaultState,
    currentGuesses: {
      ...defaultState.currentGuesses,
      guessed: [5],
    },
  };
  expect(reducer(previousState, addTries(4)))
      .toEqual({...previousState, currentGuesses: {...previousState.currentGuesses, tries: [4]}} as Game);
});

test('should push a tries to currentGuesses', () => {
  const previousState = {
    ...defaultState,
    currentGuesses: {
      ...defaultState.currentGuesses,
      tries: [4],
      guessed: [5],
    },
  };

  expect(reducer(previousState, addTries(5)))
      .toEqual({...previousState, currentGuesses: {...previousState.currentGuesses, tries: [4, 5]}} as Game);
});

test('should set the game status to won ', () => {
  expect(reducer(defaultState, setGameStatus(GameStatus.won)))
      .toEqual({...defaultState, gameStatus: GameStatus.won} as Game);
});

test('should increment current Try ', () => {
  expect(reducer(defaultState, incrementCurrentTry()))
      .toEqual({...defaultState, currentTry: 1} as Game);
});
