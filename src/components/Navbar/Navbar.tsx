import {GAME_TITLE} from '../../constants/strings';
import React from 'react';
import {
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';
import {dispatchStore} from '../../store/type';
import {toggleInfoModal, toggleSettingsModal} from '../../store/modal/slicer';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
          onClick={() => dispatchStore(toggleInfoModal())}
        />
        <p className="text-xl ml-2.5 font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="right-icons">
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={()=>dispatchStore(toggleSettingsModal())}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

