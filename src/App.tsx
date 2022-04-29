import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {InfoModal} from "./components/Modal/InfoModal";
import {SettingsModal} from "./components/Modal/SettingsModal";
import {dispatchStore, useAppSelector} from "./store/type";
import {nextStep} from "./lib/game";
import {pickScaleFromSettings} from "./constants/validGuesses";
import {setCurrentGuesses} from "./store/Game/Slicer";


import {CustomPiano} from "./components/Piano/Piano";
import {GAME_LOST_INFO_DELAY} from "./constants/setting";
import {toggleStatsModal} from "./store/Modal/Slicer";
import {WIN_MESSAGES} from "./constants/strings";

function App() {
    const {currentGuesses} = useAppSelector(state => state.persistedStore.gameStore);
    const settings = useAppSelector(state => state.persistedStore.settingsStore);
    const {isGameWon, isGameLost} = useAppSelector(state => state.persistedStore.gameStore);

    useEffect(() => {
        dispatchStore(setCurrentGuesses(pickScaleFromSettings(settings)));
        //   dispatchStore(setGuesses(pickRa))
    }, [settings]);

    useEffect(() => {
        if (isGameWon) {
            const winMessage =
                WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)]


        }

        if (isGameLost) {
            setTimeout(() => {
                dispatchStore(toggleStatsModal())
            }, GAME_LOST_INFO_DELAY)
        }
    }, [isGameWon, isGameLost])


    return (
        <>
            <div className="h-screen flex flex-col">
                <Navbar/>
                <div className="pt-2 px-1 pb-8 md:max-w-7xl w-full mx-auto sm:px-6 lg:px-8 flex flex-col grow">
                    <div className="pb-6 grow">
                        {JSON.stringify(currentGuesses)}
                        next step : {nextStep}
                        <CustomPiano/>

                    </div>
                    <InfoModal/>
                    <SettingsModal/>
                </div>
            </div>
        </>
    )
}

export default App;
