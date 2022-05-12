import {Stats} from '../domain/models/Stats';
import reducer, {addLoss, addWin, updateBestStreak, updateSuccessRate} from '../store/Stats/Slicer';

const initialState: Stats = {
  winDistribution: [],
  gamesFailed: 0,
  currentStreak: 0,
  bestStreak: 0,
  totalGames: 0,
  successRate: 0,
};


test('should return 75% WR', () => {
  const prevState = {...initialState, totalGames: 20, gamesFailed: 5};
  expect(reducer(prevState, updateSuccessRate()))
      .toEqual( {...prevState, successRate: 75} );
});

test('should return 50% WR', () => {
  const prevState = {...initialState, totalGames: 10, gamesFailed: 5};
  expect(reducer(prevState, updateSuccessRate()))
      .toEqual( {...prevState, successRate: 50} );
});

test('should return 0% WR', () => {
  const prevState = {...initialState};
  expect(reducer(prevState, updateSuccessRate()))
      .toEqual( {...prevState, successRate: 0} );
});


test('Should add a win and spread data', () => {
  const prevState = {...initialState};
  expect(reducer(prevState, addWin() ))
      .toEqual( {...prevState,
        winDistribution: [1],
        totalGames: 1,
        currentStreak: 1,
      });
});


test('Should add a win and spread data', () => {
  const prevState = {...initialState};
  expect(reducer(prevState, addWin() ))
      .toEqual( {...prevState,
        winDistribution: [1],
        totalGames: 1,
        currentStreak: 1,
      });
});


test('Should add a loose and spread data', () => {
  const prevState = {...initialState};
  expect(reducer(prevState, addLoss() ))
      .toEqual( {...prevState,
        winDistribution: [0],
        totalGames: 1,
        gamesFailed: 1,
      });
});

test('Should update the best streak', () => {
  const prevState = {...initialState,
    currentStreak: 3,
    bestStreak: 1};
  expect(reducer(prevState, updateBestStreak() ))
      .toEqual( {...prevState,
        bestStreak: 3,
      });
});

test('Should not update the best streak', () => {
  const prevState = {...initialState,
    currentStreak: 1,
    bestStreak: 3};
  expect(reducer(prevState, updateBestStreak() ))
      .toEqual( {...prevState});
});

