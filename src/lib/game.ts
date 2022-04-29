import {Scale} from "../constants/validGuesses";

export const IsWinningScale = (scale: Scale): boolean => {
    return solution === scale.notes;
}

const getScaleOfDay = () => {
    const epochMs = new Date(2022, 4).valueOf()
    const now = Date.now()
    const msInDay = 86400000
    const index = Math.floor((now - epochMs) / msInDay)
    const nextStep = (index + 1) * msInDay + epochMs

    return {
        solution: ["S","O","L","U","T","I","O","N"],
        solutionIndex: index,
        nextStep: nextStep,
    }
}

export const {
    solution,
    solutionIndex,
    nextStep
} = getScaleOfDay()
