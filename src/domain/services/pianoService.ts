import {recording} from '../models/piano';
import {IPianoService} from '../ports/PianoPorts';


const getRecordingEndTime = (recording : recording) => {
  if (recording.events.length === 0) {
    return 0;
  }
  return Math.max(
      ...recording.events.map((event :any) => event.time + event.duration),
  );
};


export const pianoService : IPianoService = {
  getRecordingEndTime,
};
