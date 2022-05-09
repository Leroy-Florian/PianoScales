import {createSlice} from '@reduxjs/toolkit';
import {ModalState} from '../../domain/models/modal';

const initialState : ModalState = {
  isInfoModalOpen: false,
  isSettingsModalOpen: false,
  isLooseModalOpen: false,
  isWinModalOpen: false,
};

const ModalSlice = createSlice({
  name: 'modalStore',
  initialState: initialState,
  reducers: {
    toggleInfoModal: (state) => {
      return {...state, isInfoModalOpen: !state.isInfoModalOpen};
    },
    toggleSettingsModal: (state) => {
      return {...state, isSettingsModalOpen: !state.isSettingsModalOpen};
    },
    toggleLooseModal: (state) => {
      return {...state, isLooseModalOpen: !state.isLooseModalOpen};
    },
    toggleWinModal: (state) => {
      return {...state, isWinModalOpen: !state.isWinModalOpen};
    },
    closeModal: (state) => {
      return {...state,
        isInfoModalOpen: false,
        isSettingsModalOpen: false,
        isLooseModalOpen: false,
        isWinModalOpen: false,
      };
    },
  },
});

export const {
  toggleInfoModal,
  toggleSettingsModal,
  toggleLooseModal,
  toggleWinModal,
  closeModal,
} = ModalSlice.actions;
export default ModalSlice.reducer;
