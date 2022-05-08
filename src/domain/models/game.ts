import {Scale} from './scale';
import {currentGuess} from './currentGuess';


export type Game = {
    gameStatus : GameState
    scaleToDiscover: Scale,
    currentGuesses: currentGuess,
    currentTry: number,
}

type GameState = 'won' | 'lost' | 'ongoing' | 'notStarted';


export enum GameStatus {
    won = 'won',
    lost = 'lost',
    ongoing = 'ongoing',
    notStarted = 'notStarted',
}
