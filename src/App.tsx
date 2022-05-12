import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {InfoModal} from './components/Modal/InfoModal';
import {SettingsModal} from './components/Modal/SettingsModal';
import {useAppDispatch, useAppSelector} from './store/type';
import {CustomPiano} from './components/Piano/Piano';
import {Footer} from './components/Footer/Footer';
import {LoosingModal} from './components/Modal/LoosingModal';
import {WonModal} from './components/Modal/WonModal';
import {GameService} from './domain/services/gameService';
import {FirstTime, LooseGame, WinGame} from './lib/batchActions';


function App() {
  const dispatchStore = useAppDispatch();
  const {
    scaleToDiscover,
    currentGuesses,
    currentTry,
    gameStatus,
  } = useAppSelector((state) => state.persistedStore.gameStore);
  const {userSettings, gameMode} = useAppSelector((state) => state.persistedStore.settingsStore);
  const {isWinningScale, isGameOver} = GameService;

  // useEffect(() => {
  //   dispatchStore(setCurrentGuesses(pickRandomItemInArray(pickScaleFromSettings(settings))));
  // }, [settings]);

  useEffect(() => {
    if (userSettings.firstTime) {
      dispatchStore(FirstTime);
    }
  }, []);

  useEffect(() => {
    if (isGameOver(currentTry, gameMode)) {
      dispatchStore(LooseGame);
    }
    if (isWinningScale(scaleToDiscover, currentGuesses.guessed)) {
      dispatchStore(WinGame);
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
