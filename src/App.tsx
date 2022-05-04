import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {InfoModal} from './components/Modal/InfoModal';
import {SettingsModal} from './components/Modal/SettingsModal';
import {dispatchStore, useAppSelector} from './store/type';
import {pickRandomItemInArray, pickScaleFromSettings} from './constants/validGuesses';
import {setCurrentGuesses} from './store/Game/Slicer';
import {CustomPiano} from './components/Piano/Piano';


function App() {
  const {currentGuesses} = useAppSelector((state) => state.persistedStore.gameStore);
  const settings = useAppSelector((state) => state.persistedStore.settingsStore);
  useEffect(() => {
    dispatchStore(setCurrentGuesses(pickRandomItemInArray(pickScaleFromSettings(settings))));
  }, [settings]);


  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar/>
        <div className="pt-2 px-1 pb-8 md:max-w-7xl w-full mx-auto sm:px-6 lg:px-8 flex flex-col grow">
          <div className="pb-6 grow">
            <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">{currentGuesses.notation && currentGuesses.notation.FR}</h3>
            <h2 className="font-medium leading-tight text-1xl">{currentGuesses.notation && currentGuesses.notation.EN}</h2>

            {JSON.stringify(currentGuesses)}
            <CustomPiano/>

          </div>
          <InfoModal/>
          <SettingsModal/>
        </div>
      </div>
    </>
  );
}

export default App;
