import {Settings} from '../domain/models/settings';
import reducer, {toggleMajorScale} from '../store/settings/slicer';
import {EASY_MODE} from '../constants/setting';


const defaultState: Settings = {
  scale: {
    Major: {
      C: false,
      D: false,
      E: false,
      F: false,
      G: false,
      A: false,
      B: false,
    },
    MinorHarmonic: {
      C: false,
      D: false,
      E: false,
      F: false,
      G: false,
      A: false,
      B: false,
    },
  },
  gameSettings: {
    gameMode: EASY_MODE,
    maxTries: 3,
  },
  userSettings: {
    dailyChallenge: false,
    dailyObjectives: 0,
    firstTime: true,
  },
};


test('Should toggle Major C scale', ()=> {
  const previousState = {...defaultState};
  expect(reducer(previousState, toggleMajorScale( 'C')))
      .toEqual({
        ...previousState,
        scale: {
          ...previousState.scale,
          Major: {
            ...previousState.scale.Major,
            C: true,
          },
        },
      });
},
);

test('Should toggle Major D scale', ()=> {
  const previousState = {...defaultState};
  expect(reducer(previousState, toggleMajorScale( 'D')))
      .toEqual({
        ...previousState,
        scale: {
          ...previousState.scale,
          Major: {
            ...previousState.scale.Major,
            D: true,
          },
        },
      });
},
);

test('Should toggle Major Cs scale', ()=> {
  const previousState = {...defaultState, scale: {
    ...defaultState.scale,
    Major: {
      ...defaultState.scale.Major,
      Cs: true,
    },
  },
  };
  expect(reducer(previousState, toggleMajorScale('Cs')))
      .toEqual({
        ...previousState,
        scale: {
          ...previousState.scale,
          Major: {
            ...previousState.scale.Major,
            Cs: false,
          },
        },
      });
},
)
;

