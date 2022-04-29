import { createSlice } from '@reduxjs/toolkit'

const ModalSlice = createSlice({
    name: 'modalStore',
    initialState: {
        isInfoModalOpen: false,
        isSettingsModalOpen: false,
        isStatsModalOpen: false,
    },
    reducers: {
        toggleInfoModal: (state) => {
          return { ...state ,isInfoModalOpen: !state.isInfoModalOpen}
        },
        toggleSettingsModal: (state) => {
         return  { ...state ,isSettingsModalOpen: !state.isSettingsModalOpen}
        },
        toggleStatsModal: (state) => {
          return  { ...state ,isStatsModalOpen: !state.isStatsModalOpen}
        },
        closeModal: (state) => {
        return   { ...state ,
                isInfoModalOpen: false,
                isSettingsModalOpen: false,
                isStatsModalOpen: false
            }
        },
    }
})

export const {
    toggleInfoModal,
    toggleSettingsModal,
    toggleStatsModal,
    closeModal,
} = ModalSlice.actions
export default ModalSlice.reducer

export const modalState = ModalSlice