import {MidiNumbers} from "react-piano";

export const noteRange = {
    first: MidiNumbers.fromNote('c3'),
    last: MidiNumbers.fromNote('f4'),
};
export const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';
export const audioContext = new (window.AudioContext)();


