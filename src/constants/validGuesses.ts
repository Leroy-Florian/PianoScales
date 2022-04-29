import {
    BLUES_SCALE,
    C_MAJOR_SCALE,
    Cm_HARMONIC_SCALE,
    Cm_MELODIC_SCALE,
    Cm_NATURAL_SCALE,
    JAZZ_SCALE,
    PENTATONIC_SCALE
} from "./strings";
import {settingsState} from "../store/Settings/Slicer";

export type Scale = {
    name: string,
    notes: string[]
}


const VALID_MAJOR_SCALE: Scale[] = [
    {
        notes: ["C", "D", "E", "F", "G", "A", "B", "C"],
        name: C_MAJOR_SCALE
    }
]

const VALID_MINOR_HARMONIC_SCALE: Scale[] = [
    {
        notes: ["H", "A", "R", "M", "O", "N", "I", "C"],
        name: Cm_HARMONIC_SCALE
    }
]
const VALID_JAZZ_SCALE: Scale[] = [
    {
        notes: ["J", "A", "Z", "Z", "Z", "Z", "Z", "Z"],
        name: JAZZ_SCALE
    }
]

const VALID_MINOR_MELODIC: Scale[] = [
    {
        notes: ["M", "E", "L", "O", "D", "I", "C"],
        name: Cm_MELODIC_SCALE
    }
]

const VALID_MINOR_NATURAL: Scale[] = [
    {
        notes: ["N", "A", "T", "U", "R", "A", "L"],
        name: Cm_NATURAL_SCALE
    }
]

const VALID_PENTATONIC: Scale[] = [
    {
        notes: ["P", "E", "N", "T", "A", "T", "O", "N"],
        name: PENTATONIC_SCALE
    }
]

const VALID_BLUES: Scale[] = [
    {
        notes: ["B", "L", "U", "E", "S"],
        name: BLUES_SCALE
    }
]
export const pickScaleFromSettings = (settings: settingsState): Scale[] => {
    const result: Scale[] = []
    const {
        Major,
        MinorHarmonic,
        MinorMelodic,
        MinorNatural,
        Jazz,
        Pentatonic,
        Blues
    } = settings

    if (Major) result.push(...VALID_MAJOR_SCALE)
    if (MinorHarmonic) result.push(...VALID_MINOR_HARMONIC_SCALE)
    if (Jazz) result.push(...VALID_JAZZ_SCALE)
    if (MinorMelodic) result.push(...VALID_MINOR_MELODIC)
    if (MinorNatural) result.push(...VALID_MINOR_NATURAL)
    if (Pentatonic) result.push(...VALID_PENTATONIC)
    if (Blues) result.push(...VALID_BLUES)
    return result;
}


const pickRandomScale = (scales: Scale[]) => {
    const randomIndex = Math.floor(Math.random() * scales.length)
    return scales[randomIndex]
}

