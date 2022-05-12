export type Settings = {
    scale : Record<scaleArchetype, scaleType>;
    gameMode : gameModeSetting,
    userSettings :{
        firstTime: boolean,
    }
}

export type gameModeSetting = {
    title : string
    try : number
    duration : number
}


export type scaleArchetype = 'Major' | 'MinorHarmonic'

export type majorScale = 'C' |'Cs'| 'D' | 'E' | 'F' | 'G' | 'A' | 'B'
export type minorMelodicScale = 'Cm' | 'Dm' | 'Em' | 'Fm' | 'Gm' | 'Am' | 'Bm'
export type allSelected = 'allSelected'

export type allTones = allSelected & majorScale | allSelected & minorMelodicScale
type scaleType = Record<allTones, boolean>

