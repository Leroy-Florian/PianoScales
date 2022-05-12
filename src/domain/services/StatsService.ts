import {Stats} from '../models/Stats';
import {ServicePorts} from '../ports/StatsPorts';

const getSuccessRate = (gameStats: Stats) => {
  const {totalGames, gamesFailed} = gameStats;

  return Math.round(
      (100 * (totalGames - gamesFailed)) / Math.max(totalGames, 1),
  );
};

export const StatsService : ServicePorts = {
  getSuccessRate,
};
