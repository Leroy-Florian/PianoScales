import {createSlice} from '@reduxjs/toolkit';
import {Keys} from '../../constants/validGuesses';


type key = {
    key: string,
    value: boolean
}

export type settingsState = {
    scale : {
        Major: {
          allSelected :boolean,
          C : key,
          D : key,
          E : key,
          F : key,
          G : key,
          A : key,
          B : key
        }
        MinorHarmonic: {
          Cm : key,
          Dm : key,
        },
    },
    maxTries: number,
    dailyChallenge: boolean,
    dailyObjectives: number,
}


const initialState: settingsState = {
  scale: {
    Major: {
      allSelected: false,
      C: {
        key: Keys.C,
        value: true,
      },
      D: {
        key: Keys.D,
        value: true,
      },
      E: {
        key: Keys.E,
        value: true,
      },
      F: {
        key: Keys.F,
        value: true,
      },
      G: {
        key: Keys.G,
        value: true,
      },

      A: {
        key: Keys.A,
        value: true,
      },
      B: {
        key: Keys.B,
        value: true,
      },
    },
    MinorHarmonic: {
      Cm: {
        key: Keys.Cm,
        value: true,
      },
      Dm: {
        key: Keys.Dm,
        value: true,
      },
    },
  },
  maxTries: 3,
  dailyChallenge: false,
  dailyObjectives: 0,
};

const SettingSlice = createSlice({
  name: 'settingStore',
  initialState: initialState,
  reducers: {
    toggleMajorC: (state) => {
      return {
        ...state,
        scale: {
          ...state.scale,
          Major: {
            ...state.scale.Major,
            C: {...state.scale.Major.C, value: !state.scale.Major.C.value},
          },
        },
      };
    },
    toggleMajorD: (state) => {
      return {
        ...state,
        scale: {
          ...state.scale,
          Major: {
            ...state.scale.Major,
            D: {...state.scale.Major.D, value: !state.scale.Major.D.value},
          },
        },
      };
    },
    toggleMajorE: (state) => {
      return {
        ...state,
        scale: {
          ...state.scale,
          Major: {
            ...state.scale.Major,
            E: {...state.scale.Major.E, value: !state.scale.Major.E.value},
          },
        },
      };
    },

    toggleMajorF: (state)=> {
      return {
        ...state,
        scale: {
          ...state.scale,
          Major: {
            ...state.scale.Major,
            F: {...state.scale.Major.F, value: !state.scale.Major.F.value},
          },
        },
      };
    },

    toggleMajorG: (state )=> {
      return {
        ...state,
        scale: {
          ...state.scale,
          Major: {
            ...state.scale.Major,
            G: {...state.scale.Major.G, value: !state.scale.Major.G.value},
          },
        },
      };
    },
    toggleMajorA: (state )=> {
      return {
        ...state,
        scale: {
          ...state.scale,
          Major: {
            ...state.scale.Major,
            A: {...state.scale.Major.A, value: !state.scale.Major.A.value},
          },
        },
      };
    },

    toggleMajorB: (state )=> {
      const result = {
        ...state,
        scale: {
          ...state.scale,
          Major: {
            ...state.scale.Major,
            B: {...state.scale.Major.B, value: !state.scale.Major.B.value},
          },
        },
      };
      if (isAllMajorSelected(result)) {
        result.scale.Major.allSelected = true;
      }
      return result;
    },

    selectAllMajor: (state) => {
      return {
        ...state,
        scale: {
          ...state.scale,
          Major: {
            allSelected: true,
            C: {...state.scale.Major.C, value: true},
            D: {...state.scale.Major.D, value: true},
            E: {...state.scale.Major.E, value: true},
            F: {...state.scale.Major.F, value: true},
            G: {...state.scale.Major.G, value: true},
            A: {...state.scale.Major.A, value: true},
            B: {...state.scale.Major.B, value: true},
          },
        },
      };
    },
    unselectAllMajor: (state) => {
      return {
        ...state,
        scale: {
          ...state.scale,
          Major: {
            allSelected: false,
            C: {...state.scale.Major.C, value: false},
            D: {...state.scale.Major.D, value: false},
            E: {...state.scale.Major.E, value: false},
            F: {...state.scale.Major.F, value: false},
            G: {...state.scale.Major.G, value: false},
            A: {...state.scale.Major.A, value: false},
            B: {...state.scale.Major.B, value: false},
          },
        },
      };
    },

    selectMajorAllSelected: (state) => {
      return {
        ...state,
        scale: {
          ...state.scale,
          Major: {...state.scale.Major, allSelected: true},
        },
      };
    },
    unselectMajorAllSelected: (state) => {
      return {
        ...state,
        scale: {
          ...state.scale,
          Major: {...state.scale.Major, allSelected: false},
        },
      };
    },

    toggleMinorHarmonicCm: (state) => {
      return {
        ...state,
        scale: {
          ...state.scale,
          MinorHarmonic: {
            ...state.scale.MinorHarmonic,
            Cm: {...state.scale.MinorHarmonic.Cm, value: !state.scale.MinorHarmonic.Cm.value},
          },
        },
      };
    },

    toggleMinorHarmonicDm: (state) => {
      return {
        ...state,
        scale: {
          ...state.scale,
          MinorHarmonic: {
            ...state.scale.MinorHarmonic,
            Dm: {...state.scale.MinorHarmonic.Dm, value: !state.scale.MinorHarmonic.Dm.value},
          },
        },
      };
    },
  },
});

export const {
  toggleMajorC,
  toggleMajorA,
  toggleMajorB,
  toggleMajorD,
  toggleMajorE,
  toggleMajorF,
  toggleMajorG,
  selectAllMajor,
  unselectAllMajor,
  toggleMinorHarmonicCm,
  toggleMinorHarmonicDm,
  selectMajorAllSelected,
  unselectMajorAllSelected,
} = SettingSlice.actions;

export default SettingSlice.reducer;

export const isAllMajorSelected = (state : settingsState ) : boolean => {
  const major = state.scale.Major;
  if (!major.A.value) return false;
  if (!major.B.value) return false;
  if (!major.C.value) return false;
  if (!major.D.value) return false;
  if (!major.E.value) return false;
  if (!major.F.value) return false;
  if (!major.G.value) return false;
  return true;
};


// todo a sortir dans le app et a mettre dans le useEffect de settings avec une belle fonction propre qui gere le state des all select / Unselecte
//    if (isAllMajorSelected(result)) {
//         return {
//           ...result,
//           scale: {
//             ...state.scale,
//             Major: {
//               ...state.scale.Major,
//               allSelected: true,
//             },
//           },
//         };
//       }
//       return result;

