import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {InfoModal} from './components/Modal/InfoModal';
import {SettingsModal} from './components/Modal/SettingsModal';
import {dispatchStore, useAppSelector} from './store/type';
import {CustomPiano} from './components/Piano/Piano';
import {toggleInfoModal} from './store/modal/slicer';
import {toggleFirstTime} from './store/settings/slicer';
import {Footer} from './components/Footer/Footer';


function App() {
  const {scaleToDiscover, currentGuesses, currentTry} = useAppSelector((state) => state.persistedStore.gameStore);
  const {userSettings} = useAppSelector((state) => state.persistedStore.settingsStore);

  // useEffect(() => {
  //   dispatchStore(setCurrentGuesses(pickRandomItemInArray(pickScaleFromSettings(settings))));
  // }, [settings]);

  useEffect(() => {
    if (userSettings.firstTime) {
      dispatchStore(toggleInfoModal());
      dispatchStore(toggleFirstTime());
    }
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar/>
        <div className="pt-2 px-1 pb-8 md:max-w-7xl w-full mx-auto sm:px-6 lg:px-8 flex flex-col grow">
          <div className="pb-6 grow">
            <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">{scaleToDiscover.notation && scaleToDiscover.notation.FR}</h3>
            <h2 className="font-medium leading-tight text-1xl">{scaleToDiscover.notation && scaleToDiscover.notation.EN}</h2>

                  scale to discover : {JSON.stringify(scaleToDiscover)}
                  current guesss : {JSON.stringify(currentGuesses)}


            {JSON.stringify('Current Try : ' + currentTry)}
            <CustomPiano/>


          </div>
          <InfoModal/>
          <SettingsModal/>
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default App;
