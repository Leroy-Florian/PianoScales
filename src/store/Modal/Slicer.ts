import {createSlice} from '@reduxjs/toolkit';

const ModalSlice = createSlice({
  name: 'modalStore',
  initialState: {
    isInfoModalOpen: false,
    isSettingsModalOpen: false,
  },
  reducers: {
    toggleInfoModal: (state) => {
      return {...state, isInfoModalOpen: !state.isInfoModalOpen};
    },
    toggleSettingsModal: (state) => {
      return {...state, isSettingsModalOpen: !state.isSettingsModalOpen};
    },
    closeModal: (state) => {
      return {...state,
        isInfoModalOpen: false,
        isSettingsModalOpen: false,
      };
    },
  },
});


export const {
  toggleInfoModal,
  toggleSettingsModal,
  closeModal,
} = ModalSlice.actions;
export default ModalSlice.reducer;
