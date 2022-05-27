export type Piano = {
    keysDown: {},
    noteDuration: number,
    notesRecorded: boolean,
    activeNotes: [],
    recording: recording
}
export type recording = {
    mode: PIANO_MODE,
    endTime: number,
    // notes: any[],
    events: any[],
    currentTime: number,
    currentEvents: any[],
}

type PIANO_MODE = 'RECORDING' | 'PLAYING' | 'STOPPED';
