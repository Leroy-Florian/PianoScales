export type Piano = {
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

type PIANO_MODE = 'RECORDING' | 'PLAYING' | 'STOPPED';
