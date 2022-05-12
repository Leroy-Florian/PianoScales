import {Stats} from '../models/Stats';

export interface ServicePorts {
    getSuccessRate: (gameStats: Stats) => number
}

