import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {InfoModal} from './components/Modal/InfoModal';
import {SettingsModal} from './components/Modal/SettingsModal';
import {dispatchStore, useAppSelector} from './store/type';
import {CustomPiano} from './components/Piano/Piano';
import {toggleInfoModal, toggleLooseModal, toggleWinModal} from './store/modal/slicer';
import {toggleFirstTime} from './store/settings/slicer';
import {Footer} from './components/Footer/Footer';
import {LoosingModal} from './components/Modal/LoosingModal';
import {WonModal} from './components/Modal/WonModal';
import {setGameStatus} from './store/game/slicer';
import {GameStatus} from './domain/models/game';
import {GameService} from './domain/services/gameService';


function App() {
  const {scaleToDiscover, currentGuesses, currentTry, gameStatus} = useAppSelector((state) => state.persistedStore.gameStore);
  const {userSettings, gameMode} = useAppSelector((state) => state.persistedStore.settingsStore);
  const {isWinningScale, isGameOver} = GameService;
  // useEffect(() => {
  //   dispatchStore(setCurrentGuesses(pickRandomItemInArray(pickScaleFromSettings(settings))));
  // }, [settings]);

  useEffect(() => {
    if (userSettings.firstTime) {
      dispatchStore(toggleInfoModal());
      dispatchStore(toggleFirstTime());
    }
  }, []);

  useEffect(() => {
    if (isGameOver(currentTry, gameMode)) {
      console.log('GAME OVER');
      dispatchStore(toggleInfoModal());
      dispatchStore(toggleLooseModal());
      dispatchStore(setGameStatus(GameStatus.lost));
    }
    if (isWinningScale(scaleToDiscover, currentGuesses.guessed)) {
      console.log('WINNING');
      dispatchStore(toggleWinModal());
      dispatchStore(setGameStatus(GameStatus.won));
    }
  }, [currentGuesses]);

  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar/>
        <div className="pt-2 px-1 pb-8 md:max-w-7xl w-full mx-auto sm:px-6 lg:px-8 flex flex-col grow">
          <div className="pb-6 grow">
            <h1>              {JSON.stringify(gameStatus)}            </h1>
            <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">{scaleToDiscover.notation && scaleToDiscover.notation.FR}</h3>
            <h2 className="font-medium leading-tight text-1xl">{scaleToDiscover.notation && scaleToDiscover.notation.EN}</h2>

                  scale to discover : {JSON.stringify(scaleToDiscover)}
                  current guesss : {JSON.stringify(currentGuesses)}


            {JSON.stringify('Current Try : ' + currentTry)}
            <CustomPiano/>


          </div>
          <InfoModal/>
          <SettingsModal/>
          <LoosingModal/>
          <WonModal/>
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default App;
