import {createSlice} from '@reduxjs/toolkit'

const GameSlice = createSlice({
    name: 'gameStore',
    initialState: {
        isGameWon: false,
        isGameLost: false,
        currentGuesses: "this is a test",
        guesses: ["S", "A", "M", "P", "L", "E", "R"],
        currentTry: 0,
    },
    reducers: {
        setGameWon: (state, action) => {
            return {
                ...state,
                isGameWon: action.payload,
            }
        },
        setGameLost: (state, action) => {
            return {
                ...state,
                isGameLost: action.payload,
            }
        },
        setCurrentGuesses: (state, action) => {
            return {
                ...state,
                currentGuesses: action.payload,
            }
        },
        setGuesses: (state, action) => {
            return {
                ...state,
                guesses: action.payload,
            }
        },
        setCurrentTry: (state, action) => {
            return {
                ...state,
                currentTry: action.payload,
            }
        },
    },
})

export const {
    setGameWon,
    setGameLost,
    setCurrentGuesses,
    setGuesses,
    setCurrentTry,
} = GameSlice.actions
export default GameSlice.reducer

