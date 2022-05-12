import {useAppDispatch, useAppSelector} from '../../store/type';
import {BaseModal} from './BaseModal';
import {WIN_MESSAGES} from '../../constants/strings';
import {closeModal} from '../../store/modal/slicer';
import React from 'react';
import {resetGame} from '../../store/game/slicer';

export const WonModal = () => {
  const dispatchStore = useAppDispatch();
  const {isWinModalOpen} = useAppSelector((state) => state.nonPersistedStore.modalStore);
  return (
    <BaseModal
      title={WIN_MESSAGES}
      isOpen={isWinModalOpen}
      handleClose={() => {
        dispatchStore(closeModal());
        dispatchStore(resetGame());
      }}
    >
      <div>WINNNNNNNNNNNNER</div>

    </BaseModal>
  );
};
