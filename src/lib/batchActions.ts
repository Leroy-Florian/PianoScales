import {toggleInfoModal, toggleLooseModal, toggleWinModal} from '../store/modal/slicer';
import {resetGame, setGameStatus} from '../store/game/slicer';
import {GameStatus} from '../domain/models/game';
import {updateBestStreak, updateSuccessRate} from '../store/Stats/Slicer';
import {toggleFirstTime} from '../store/settings/slicer';

export const FirstTime = [toggleInfoModal(), toggleFirstTime()];
export const updateStats = [updateSuccessRate(), updateBestStreak()];

export const WinGame = [
  toggleWinModal(),
  setGameStatus(GameStatus.won),
  ...updateStats,
];
export const LooseGame = [
  toggleLooseModal(),
  setGameStatus(GameStatus.lost),
  ...updateStats,
  resetGame(),
];

