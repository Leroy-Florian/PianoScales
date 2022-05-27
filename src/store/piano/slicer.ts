import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_NOTE_DURATION} from '../../constants/setting';
import {Piano} from '../../domain/models/piano';

export const noteTest = [
  {
    midiNumber: 48,
    time: 0,
    duration: 0.2,
  }, {
    midiNumber: 50,
    time: 0.2,
    duration: 0.2,
  },
  {
    midiNumber: 52,
    time: 0.4,
    duration: 0.2,
  },

];

const initialState : Piano = {
  keysDown: {},
  noteDuration: DEFAULT_NOTE_DURATION,
  notesRecorded: false,
  activeNotes: [],
  recording: {
    mode: 'RECORDING',
    endTime: 0.6,
    events: noteTest,
    currentTime: 0,
    currentEvents: noteTest,
  },
};

const PianoSlice = createSlice({
  name: 'pianoStore',
  initialState: initialState,
  reducers: {
    setRecordingMode: (state, action) => {
      return {...state, mode: action.payload};
    },
    setRecording: (state, action) => {
      return {...state,
        recording: {
          ...state.recording,
          mode: action.payload.mode,
          currentEvent: action.payload.currentEvent,
        }};
    },
    setCurrentEvents: (state, action) => {
      return {...state,
        recording: {
          ...state.recording,
          events: action.payload,
        },
      };
    },
    setScaleToPlay: (state, action) => {
      return {...state,
        recording: {
          ...state.recording,
          notes: action.payload,
        },
      };
    },


  },
});

export const {
  setRecordingMode,
  setRecording,
  setCurrentEvents,
  setScaleToPlay,
} = PianoSlice.actions;
export default PianoSlice.reducer;

