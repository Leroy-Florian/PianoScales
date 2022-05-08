import {gameModeSetting} from '../domain/models/settings';
import {DIFFICULTIES} from './strings';

export const EASY_MODE : gameModeSetting= {
  title: DIFFICULTIES.EASY,
  try: 8,
  duration: 5,
};
export const MEDIUM_MODE : gameModeSetting={
  title: DIFFICULTIES.MEDIUM,
  try: 5,
  duration: 4,
};
export const HARD_MODE : gameModeSetting = {
  title: DIFFICULTIES.HARD,
  try: 1,
  duration: 2,
};

const DURATION_UNIT = 0.2;
export const DEFAULT_NOTE_DURATION = DURATION_UNIT;
