import {createSlice} from '@reduxjs/toolkit'

export type settingsState = {
    Major: boolean,
    MinorHarmonic: boolean,
    MinorNatural: boolean,
    MinorMelodic: boolean,
    Pentatonic: boolean,
    Blues: boolean,
    Jazz: boolean
}

const initialState: settingsState = {
    Major: true,
    MinorHarmonic: true,
    MinorNatural: true,
    MinorMelodic: true,
    Pentatonic: true,
    Blues: true,
    Jazz: true
}

const SettingSlice = createSlice({
    name: 'settingStore',
    initialState: initialState,
    reducers: {
        toggleMajor: (state) => {
            return {
                ...state,
                Major: !state.Major
            }
        },
        toggleMinorHarmonic: (state) => {
            return {
                ...state,
                MinorHarmonic: !state.MinorHarmonic
            }
        },
        toggleMinorNatural: (state) => {
            return {
                ...state,
                MinorNatural: !state.MinorNatural
            }
        },
        toggleMinorMelodic: (state) => {
            return {
                ...state,
                MinorMelodic: !state.MinorMelodic
            }
        },
        togglePentatonic: (state) => {
            return {
                ...state,
                Pentatonic: !state.Pentatonic
            }
        },
        toggleBlues: (state) => {
            return {
                ...state,
                Blues: !state.Blues
            }
        },
        toggleJazz: (state) => {
            return {
                ...state,
                Jazz: !state.Jazz
            }
        }
    }
})

export const {
    toggleMajor,
    toggleMinorHarmonic,
    toggleMinorNatural,
    toggleMinorMelodic,
    togglePentatonic,
    toggleBlues,
    toggleJazz
} = SettingSlice.actions

export default SettingSlice.reducer

