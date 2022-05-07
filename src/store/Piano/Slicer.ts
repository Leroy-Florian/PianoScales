import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_NOTE_DURATION} from '../../constants/setting';


type PIANO_MODE = 'RECORDING' | 'PLAYING' | 'STOPPED';

type PianoState = {
  keysDown: {},
  noteDuration: number,
  notesRecorded: boolean,
  activeNotes: [],
  mode: PIANO_MODE,
  recording: {
    endTime: number,
    notes: number[],
    events: [],
    currentTime: number,
  },
}

const initialState : PianoState = {
  keysDown: {},
  noteDuration: DEFAULT_NOTE_DURATION,
  notesRecorded: false,
  activeNotes: [],
  mode: 'RECORDING',
  recording: {
    endTime: 0,
    notes: [],
    events: [],
    currentTime: 0,
  },
};

const PianoSlice = createSlice({
  name: 'pianoStore',
  initialState: initialState,
  reducers: {
    onPlayNoteInput: (state) => {
      return {...state, notesRecorded: false};
    },

    onStopNoteInput: (state, payload) => {
      if (state.notesRecorded === false) {
        recordNotes(state, payload);
        return {...state, notesRecorded: true, noteDuration: DEFAULT_NOTE_DURATION};
      }
    },

    recordNotes: (state, payload) => {
      const midiNumbers = payload.payload.midiNumber;
      const duration = payload.payload.duration;

      if (state.mode !== 'RECORDING') {
        return;
      }
      const newEvents = midiNumbers.map((midiNumber: number) => {
        return {
          midiNumber,
          time: state.recording.currentTime,
          duration: duration,
        };
      });

      return {
        ...state,
        events: state.recording.events.concat(newEvents),
        currentTime: state.recording.currentTime + duration,
      };
    },

    setActiveNotes: (state, payload) => {
      return {...state, activeNotes: payload.payload};
    },
  },
});

export const {
  onPlayNoteInput,
  onStopNoteInput,
  recordNotes,
  setActiveNotes,
} = PianoSlice.actions;
export default PianoSlice.reducer;

