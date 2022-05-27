import {recording} from '../models/piano';

export interface IPianoService{
    getRecordingEndTime(recording: recording): number;
}
