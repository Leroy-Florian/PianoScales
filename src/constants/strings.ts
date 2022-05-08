import {Translate} from '../domain/models/translate';
import {gameModeSetting} from '../domain/models/settings';

export const GAME_TITLE = 'Piano Scales';
export const WELCOME_TITLE = `Welcome to ${GAME_TITLE}`;

export const WIN_MESSAGES = ['Great Job!', 'Awesome', 'Well done!'];
export const GAME_COPIED_MESSAGE = 'game copied to clipboard';
export const DIFFICULTIES = {
  EASY: 'Easy',
  MEDIUM: 'Medium',
  HARD: 'Hard',
};
export const NEXT = 'next';
export const DIFFICULTIES_CARD_TITLE = 'difficulties';
export const DIFFICULTIES_SELECTION_TITLE = 'Select difficulty';
export const DIFFICULTIES_SELECTION_DESC = 'Pick a difficulty level and start the game';

export const difficulty_description = (difficulty: gameModeSetting) : string =>
  `In ${difficulty.title} mode you have to guess the word before the time runs out (${difficulty.duration} sec) and have a maximum of ${difficulty.try} guesses.`;


export const MINOR_HARMONIC_DESCRIPTION = 'All Minor Harmonic';
export const MINOR_NATURAL_DESCRIPTION = 'All Minor Natural';
export const MINOR_MELODIC_DESCRIPTION = 'All minor Melodic';
export const MAJOR_DESCRIPTION = 'All Major Scales';
export const JAZZ_DESCRIPTION = 'All Jazz Scales';
export const BLUES_DESCRIPTION = 'All Blues Scales';
export const PENTATONIC_DESCRIPTION = 'All Pentatonic Scales';

export const Cm_MELODIC_SCALE = 'Cm melodic Scale';
export const Cm_NATURAL_SCALE = 'Cm natural Scale';


export const PENTATONIC_SCALE = ' Scale';
export const JAZZ_SCALE = 'Jazz Scale';
export const BLUES_SCALE = 'blues Scale';

export const STATISTICS_TITLE = 'Statistics';
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution';
export const SHARE_TEXT = 'Share';
export const TOTAL_TRIES_TEXT = 'Total tries';
export const SUCCESS_RATE_TEXT = 'Success rate';
export const CURRENT_STREAK_TEXT = 'Current streak';
export const BEST_STREAK_TEXT = 'Best streak';

export const C_MAJOR_SCALE : Translate = {
  FR: 'Gamme Do majeur',
  EN: 'C major Scale',
};

export const Cm_HARMONIC_SCALE: Translate = {
  FR: 'Gamme Do mineur harmonique',
  EN: 'C minor harmonic scale',
};

export const D_MAJOR_SCALE: Translate = {
  FR: 'Gamme Ré majeur',
  EN: 'D major scale',
};

export const E_MAJOR_SCALE: Translate = {
  FR: 'Gamme Mi majeur',
  EN: 'E major scale',
};

export const F_MAJOR_SCALE: Translate = {
  FR: 'Gamme Fa majeur',
  EN: 'F major scale',
};

export const G_MAJOR_SCALE: Translate = {
  FR: 'Gamme Sol majeur',
  EN: 'G major scale',
};

export const A_MAJOR_SCALE: Translate = {
  FR: 'Gamme La majeur',
  EN: 'A major scale',
};

export const B_MAJOR_SCALE: Translate = {
  FR: 'Gamme Si majeur',
  EN: 'B major scale',
};

export const Csharp_MAJOR_SCALE: Translate = {
  FR: 'Gamme Do# majeur',
  EN: 'C# major scale',
};

export const Dsharp_MAJOR_SCALE: Translate = {
  FR: 'Gamme Ré# majeur',
  EN: 'D# major scale',
};


export const Dm_HARMONIC_SCALE: Translate = {
  FR: 'Gamme Ré mineur harmonique',
  EN: 'D minor harmonic scale',
};
export const Em_HARMONIC_SCALE: Translate = {
  FR: 'Gamme Mi mineur harmonique',
  EN: 'E minor harmonic scale',
};
export const Fm_HARMONIC_SCALE: Translate = {
  FR: 'Gamme Fa mineur harmonique',
  EN: 'F minor harmonic scale',
};
export const Gm_HARMONIC_SCALE: Translate = {
  FR: 'Gamme Sol mineur harmonique',
  EN: 'G minor harmonic scale',
};
export const Am_HARMONIC_SCALE: Translate = {
  FR: 'Gamme La mineur harmonique',
  EN: 'A minor harmonic scale',
};
export const Bm_HARMONIC_SCALE: Translate = {
  FR: 'Gamme Si mineur harmonique',
  EN: 'B minor harmonic scale',
};
