import {Settings} from '../models/settings';
import {Scale} from '../models/scale';

export interface ISettingsPorts {
    pickScaleFromSettings: (settings: Settings) => Scale[],
}
