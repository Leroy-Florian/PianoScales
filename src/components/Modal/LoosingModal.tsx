import {dispatchStore, RootState, useAppSelector} from '../../store/type';
import {BaseModal} from './BaseModal';
import {LOOSE_MESSAGE} from '../../constants/strings';
import {closeModal} from '../../store/modal/slicer';
import React from 'react';
import {resetGame} from '../../store/game/slicer';

export const LoosingModal = () => {
  const {isLooseModalOpen} = useAppSelector((state : RootState) => state.nonPersistedStore.modalStore);
  return (
    <BaseModal
      title={LOOSE_MESSAGE}
      isOpen={isLooseModalOpen}
      handleClose={() => {
        dispatchStore(closeModal());
        dispatchStore(resetGame());
      }}
    >
      <div>LOOOOOOOOOOOSEEEEEEEEER</div>

    </BaseModal>
  );
};
