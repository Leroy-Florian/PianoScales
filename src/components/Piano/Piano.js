import {KeyboardShortcuts, MidiNumbers, Piano} from "react-piano";

export const CustomPiano = () => {
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('f5');

    return (
        <Piano
            noteRange={{first: firstNote, last: lastNote}}
            playNote={(midiNumber) => {
                // Play a given note - see notes below
            }}
            stopNote={(midiNumber) => {
                // Stop playing a given note - see notes below
            }}
        />
    );
}
