import React from 'react';
import SoundfontProvider from './soundProvider';
import {audioContext, keyboardShortcuts, noteRange, soundfontHostname} from './constants';
import {Piano} from 'react-piano';

import {play} from '../../lib/game';
import {useAppSelector} from '../../store/type';


export const CustomPiano = () => {
  const game = useAppSelector((state) => state.persistedStore.gameStore);

  const [state, setState] = React.useState({
    recording: {
      mode: 'RECORDING',
      events: [],
      currentTime: 0,
      currentEvents: [],
    },
  });

  const onPlayNoteInput = (midiNumber) => {
    console.log('onPlayNoteInput', midiNumber);
    play( midiNumber, game);
  };

  //
  // const playRecorded = (scale) => {
  //   setState({...state, recording: {...state.recording, mode: 'PLAYING'}});
  //   const startAndEndTimes = _.uniq(
  //       _.flatMap(state.recording.events, (event) => [
  //         event.time,
  //         event.time + event.duration,
  //       ]),
  //   );
  //   startAndEndTimes.forEach((time) => {
  //     scheduledEvents.push(
  //         setTimeout(() => {
  //           const currentEvents = state.recording.events.filter((event) => {
  //             return event.time <= time && event.time + event.duration > time;
  //           });
  //           setState({...state, recording: {...state.recording, currentEvents}});
  //         }, time * 1000),
  //     );
  //   });
  //   setTimeout(() => {
  //     onClickStop();
  //   }, getRecordingEndTime() * 1000);
  // };

  // const getRecordingEndTime = () => {
  //   if (state.recording.events.length === 0) {
  //     return 0;
  //   }
  //   return Math.max(
  //       ...state.recording.events.map((event) => event.time + event.duration),
  //   );
  // };

  //
  // const onClickStop = () => {
  //   scheduledEvents.forEach((scheduledEvent) => {
  //     clearTimeout(scheduledEvent);
  //   });
  //   setState({
  //     ...state,
  //     recording: {
  //       ...state.recording,
  //       mode: 'RECORDING',
  //       currentEvents: [],
  //     },
  //   });
  // };

  return (
    <>
      <SoundfontProvider
        instrumentName="acoustic_grand_piano"
        hostname={soundfontHostname}
        audioContext={audioContext}
        render={({isLoading, playNote, stopNote}) => (
          <Piano
            recording={state.recording}
            noteRange={noteRange}
            onPlayNoteInput={onPlayNoteInput}
            width={800}
            playNote={playNote}
            stopNote={stopNote}
            disabled={isLoading}
            keyboardShortcuts={keyboardShortcuts}
          />
        )}
      />
      {/* <button onClick={() => playRecorded(VALID_MAJOR_SCALE[0])}>test</button>*/}
      {/* <div>{JSON.stringify(state.recording.events)}</div>*/}
      {/* <div>{JSON.stringify(VALID_MAJOR_SCALE[0])}</div>*/}
    </>
  );
};

