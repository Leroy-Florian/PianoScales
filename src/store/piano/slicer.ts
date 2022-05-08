import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_NOTE_DURATION} from '../../constants/setting';
import {Piano} from '../../domain/models/piano';


const initialState : Piano = {
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
    setRecordedNotes: (state, payload) => {
      console.log(payload);
    //   if (this.props.recording.mode !== 'RECORDING') {
    //     return;
    //   }
    //
    //   const newEvents = midiNumbers.map((midiNumber) => {
    //     return {
    //       midiNumber,
    //       time: this.props.recording.currentTime,
    //       duration: duration,
    //     };
    //   });
    //   this.props.setRecording({
    //     events: this.props.recording.events.concat(newEvents),
    //     currentTime: this.props.recording.currentTime + duration,
    //   });
    },

  },
});

export const {
  setRecordedNotes,

} = PianoSlice.actions;
export default PianoSlice.reducer;

