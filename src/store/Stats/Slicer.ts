import {createSlice} from "@reduxjs/toolkit";


const StatsSlice = createSlice({
    name: 'statsStore',
    initialState: {
        winDistribution: [],
        gamesFailed: 0,
        currentStreak: 0,
        bestStreak: 0,
        totalGames: 0,
        successRate: 0,
    },
    reducers: {

    }
})

export const {

} = StatsSlice.actions
export default StatsSlice.reducer

