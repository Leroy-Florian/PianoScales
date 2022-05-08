import {KeyboardShortcuts as keyboardConfig, KeyboardShortcuts, MidiNumbers} from 'react-piano';

export const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f4'),
};


export const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: keyboardConfig.HOME_ROW,
});


export const audioContext = new (window.AudioContext || window.webkitAudioContext)();
export const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';
