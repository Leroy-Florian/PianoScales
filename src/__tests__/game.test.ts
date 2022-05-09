import {
  GameService,
} from '../domain/services/gameService';
import {Scale} from '../domain/models/scale';
import {Keys} from '../constants/validGuesses';
import {currentGuess} from '../domain/models/currentGuess';
import {EASY_MODE} from '../constants/setting';

const scaleToDiscover: Scale = {
  key: Keys.C,
  notes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  notation: {
    FR: 'C',
    EN: 'C',
  },
};

test('Compare two identical scale', () => {
  const Guesses: Scale = {
    key: Keys.C,
    notes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    notation: {
      FR: 'C',
      EN: 'C',
    },
  };
  expect(GameService.isWinningScale(scaleToDiscover, Guesses.notes)).toBe(true);
});

test('Compare two identical scale', () => {
  const Guesses: Scale = {
    key: Keys.C,
    notes: [48, 50, 52, 53, 55, 57, 59],
    notation: {
      FR: 'C',
      EN: 'C',
    },
  };
  const guessed = [48, 50, 52, 53, 55, 57, 59];
  expect(GameService.isWinningScale(Guesses, guessed)).toBe(true);
});


test('Compare two different scale', () => {
  const Guesses: Scale = {
    key: Keys.C,
    notes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    notation: {
      FR: 'C',
      EN: 'C',
    },
  };

  expect(GameService.isWinningScale(scaleToDiscover, Guesses.notes)).toBe(false);
});

test('last Guesses are include in Scale to discover', () => {
  expect(GameService.guessIsInScale(scaleToDiscover, 13)).toBe(true);
});

test('last Guesses are not include in Scale to discover', () => {
  expect(GameService.guessIsInScale(scaleToDiscover, 45)).toBe(false);
});

test('lastGuess is already guessed', () => {
  const currentGuesses: currentGuess = {
    tries: [52, 35, 52, 45, 45],
    guessed: [],
  };

  expect(GameService.guessIsAlreadyTried(currentGuesses, 25)).toBe(false);
});

test('lastGuess is already guessed', () => {
  const currentGuesses: currentGuess = {
    tries: [52, 35, 52, 45, 45],
    guessed: [],
  };

  expect(GameService.guessIsAlreadyTried(currentGuesses, 52)).toBe(true);
});

test('lastGuess was already tried', () => {
  const currentGuesses: currentGuess = {
    tries: [52, 35, 52, 45],
    guessed: [52],
  };

  expect(GameService.guessIsAlreadyGuessed(currentGuesses, 52)).toBe(true);
});

test('lastGuess was not tried', () => {
  const currentGuesses: currentGuess = {
    tries: [52, 35, 52],
    guessed: [52],
  };

  expect(GameService.guessIsAlreadyGuessed(currentGuesses, 45)).toBe(false);
});


test('20 Tries in Easy Mode = true ', () => {
  expect(GameService.isGameOver(20, EASY_MODE)).toBe(true);
});

test('8 Tries in Easy Mode = true ', () => {
  expect(GameService.isGameOver(8, EASY_MODE)).toBe(true);
});

test('7 Tries in Easy Mode = true ', () => {
  expect(GameService.isGameOver(7, EASY_MODE)).toBe(false);
});
