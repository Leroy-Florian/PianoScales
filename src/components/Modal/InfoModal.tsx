import {BaseModal} from './BaseModal';
import {dispatchStore, useAppSelector} from '../../store/type';
import {closeModal} from '../../store/modal/slicer';
import React from 'react';
import {Stepper} from '../Stepper/Stepper';
import {InfoSection} from '../Sections/InfoSection';
import {WELCOME_TITLE} from '../../constants/strings';

export const InfoModal = () => {
  const {isInfoModalOpen} = useAppSelector((state) => state.nonPersistedStore.modalStore);
  return (
    <BaseModal
      title={WELCOME_TITLE}
      isOpen={isInfoModalOpen}
      handleClose={()=> dispatchStore(closeModal())}
    >
      <Stepper/>
      <InfoSection/>

    </BaseModal>
  );
};
