import {Settings} from '../domain/models/settings';
import reducer, {toggleMajorScale, toggleMinorHarmonicScale} from '../store/settings/slicer';
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
  gameMode: EASY_MODE,
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
);


test('Should toggle Major C scale', ()=> {
  const previousState = {...defaultState};
  expect(reducer(previousState, toggleMinorHarmonicScale( 'Cm')))
      .toEqual({
        ...previousState,
        scale: {
          ...previousState.scale,
          MinorHarmonic: {
            ...previousState.scale.MinorHarmonic,
            Cm: true,
          },
        },
      });
},
);

test('Should toggle Major D scale', ()=> {
  const previousState = {...defaultState};
  expect(reducer(previousState, toggleMinorHarmonicScale( 'Dm')))
      .toEqual({
        ...previousState,
        scale: {
          ...previousState.scale,
          MinorHarmonic: {
            ...previousState.scale.MinorHarmonic,
            Dm: true,
          },
        },
      });
},
);

test('Should toggle MinorHarmonic Cm scale', ()=> {
  const previousState = {...defaultState, scale: {
    ...defaultState.scale,
    MinorHarmonic: {
      ...defaultState.scale.MinorHarmonic,
      Cm: true,
    },
  },
  };
  expect(reducer(previousState, toggleMinorHarmonicScale('Cm')))
      .toEqual({
        ...previousState,
        scale: {
          ...previousState.scale,
          MinorHarmonic: {
            ...previousState.scale.MinorHarmonic,
            Cm: false,
          },
        },
      });
},
);


