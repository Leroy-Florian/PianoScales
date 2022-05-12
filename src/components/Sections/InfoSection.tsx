import React, {useState} from 'react';
import {ButtonWithArrow} from '../button/buttonWithArrow';
import {DifficultyCard} from '../Card/CompleteCard';
import {EASY_MODE, HARD_MODE, MEDIUM_MODE} from '../../constants/setting';
import {DIFFICULTIES_SELECTION_DESC, DIFFICULTIES_SELECTION_TITLE, NEXT} from '../../constants/strings';
import {useAppDispatch} from '../../store/type';
import {setGameMode} from '../../store/settings/slicer';
import {gameModeSetting} from '../../domain/models/settings';

export const InfoSection = () => {
  const dispatchStore = useAppDispatch();

  const [mode, setMode]= useState<gameModeSetting>(EASY_MODE);
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center"
        >
          <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {DIFFICULTIES_SELECTION_TITLE}
            </h2>
            <p className="mt-4 text-gray-600">
              {DIFFICULTIES_SELECTION_DESC}
            </p>

            <ButtonWithArrow
              Text={NEXT}
              onClick={() => {
                dispatchStore(setGameMode(mode),
                );
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <DifficultyCard gameMode={EASY_MODE} setGameMode={setMode}/>
            <DifficultyCard gameMode={MEDIUM_MODE} setGameMode={setMode}/>
            <DifficultyCard gameMode={HARD_MODE} setGameMode={setMode} />
          </div>
        </div>
      </div>
    </section>);
};
