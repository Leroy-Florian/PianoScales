import {MidiNumbers, Piano} from 'react-piano';
import React from 'react';
import {onPlayNoteInput, onStopNoteInput} from '../../store/Piano/Slicer';
import SoundfontProvider from './soundProvider';
import {audioContext, soundfontHostname} from './constants';
export const CustomPiano = () => {
  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');


  return (
    <SoundfontProvider
      instrumentName="acoustic_grand_piano"
      hostname={soundfontHostname}
      audioContext={audioContext}
      render={({isLoading, playNote, stopNote}) => (
        <Piano
          noteRange={{first: firstNote, last: lastNote}}
          playNote={playNote}
          stopNote={stopNote}
          disabled={isLoading}
          width={800}
          onPlayNoteInput={onPlayNoteInput}
          onStopNoteInput={onStopNoteInput}
        />
      )}
    />
  );
};
