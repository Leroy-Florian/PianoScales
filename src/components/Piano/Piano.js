import React from 'react';
import SoundfontProvider from './soundProvider';
import {
  audioContext,
  keyboardShortcuts,
  noteRange,
  soundfontHostname,
} from './constants';
import {Piano} from 'react-piano';
import {useAppDispatch, useAppSelector} from '../../store/type';
import {setRecording, setRecordingMode} from '../../store/piano/slicer';
import {
  addGuessed,
  addTries,
  incrementCurrentTry,
} from '../../store/game/slicer';
import {GameService} from '../../domain/services/gameService';
import _, {runInContext as scheduledEvents} from 'lodash';
import {VALID_MAJOR_SCALE} from '../../constants/validGuesses';


export const CustomPiano = () => {
  const dispatch = useAppDispatch();
  const {
    guessIsInScale,
    guessIsAlreadyTried,
    guessIsAlreadyGuessed,
  } = GameService;

  const game = useAppSelector((state) => state.persistedStore.gameStore);
  const {recording} = useAppSelector((state) => state.nonPersistedStore.pianoStore);
  console.log(recording);
  const onPlayNoteInput = (midiNumber) => {
    if (!guessIsAlreadyTried(game.currentGuesses, midiNumber)) {
      dispatch(addTries(midiNumber));
    }
    if (!guessIsAlreadyGuessed(game.currentGuesses, midiNumber) &&
            guessIsInScale(game.scaleToDiscover, midiNumber)) {
      dispatch(addGuessed(midiNumber));
    }
    if (!guessIsAlreadyGuessed(game.currentGuesses, midiNumber) &&
            !guessIsInScale(game.scaleToDiscover, midiNumber)) {
      dispatch(incrementCurrentTry());
    }
  };


  const playRecorded = () => {
    dispatch(setRecordingMode('PLAYING'));
    // dispatch(playRecordedScale(scale);


    // const startAndEndTimes = _.uniq(
    //     _.flatMap(recording.events, (event) => [
    //       event.time,
    //       event.time + event.duration,
    //     ]),
    // );
    // console.log(startAndEndTimes);

    // scale.forEach((time) => {
    //   scheduledEvents.push(
    setTimeout(() => {
      const currentEvents = recording.events.filter((event) => {
        return event.time <= time && event.time + event.duration > time;
      });
      dispatch(setCurrentEvents(currentEvents));
    }, 1000000);
    //   );
    // });
    // setTimeout(() => {
    //   onClickStop();
    // }, pianoService.getRecordingEndTime(recording) * 1000);
  };


  const onClickStop = () => {
    scheduledEvents.forEach((scheduledEvent) => {
      clearTimeout(scheduledEvent);
    });
    dispatch(setRecording({
      mode: 'RECORDING',
      currentEvents: [],
    },
    ));
  };
    // TODO chaque note dans la scale dois avoir son time ( moment a laquelle il est joué) et son duration (durée de la note).
    // La duration est deja defini dans nos variable d'env (DEFAULT_NOTE_DURATION)
    // Active note ne retourne que la note qui est jouer a l'instan T
    // const activeNotes = recording.currentEvents.map((event) => event.midiNumber);
    // J'ai une variable CurrentTime qui dois etre le timing actuell que je dois incrementé


  // le getRecordingEntime dois retourner le temps de fin de la note


  // retourne les notes a jouer a l'instant T dans un tableau [5,20,50]
  const activeNotes = recording.mode === 'PLAYING' ? recording.currentEvents.map((event) => event.midiNumber) : null;
  console.log(activeNotes);
  return (
    <>
      <SoundfontProvider
        instrumentName="acoustic_grand_piano"
        hostname={soundfontHostname}
        audioContext={audioContext}
        render={({isLoading, playNote, stopNote}) => (
          <Piano
            noteRange={noteRange}
            onPlayNoteInput={onPlayNoteInput}
            width={800}
            playNote={playNote}
            stopNote={stopNote}
            disabled={isLoading}
            keyboardShortcuts={keyboardShortcuts}
            activeNotes={activeNotes}
          />
        )}
      />
      <button onClick={() => playRecorded()}>test</button>
      {/* <div>{JSON.stringify(state.recording.events)}</div>*/}
      {/* <div>{JSON.stringify(VALID_MAJOR_SCALE[0])}</div>*/}
    </>
  );
};

