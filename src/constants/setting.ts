export const GAME_LOST_INFO_DELAY = 1000;

type gameModeSetting = {
    try : number
    duration : number
}
export const EASY_MODE_TRY : gameModeSetting= {
  try: 8,
  duration: 5,
};
export const MEDIUM_MODE_TRY : gameModeSetting={
  try: 5,
  duration: 4,
};
export const HARD_MODE_TRY : gameModeSetting = {
  try: 1,
  duration: 2,
};

const DURATION_UNIT = 0.2;
export const DEFAULT_NOTE_DURATION = DURATION_UNIT;
