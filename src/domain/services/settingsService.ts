import {Settings} from '../models/settings';
import {Scale} from '../models/scale';
import {VALID_MAJOR_SCALE} from '../../constants/validGuesses';
import {ISettingsPorts} from '../ports/settingsPorts';


const pickScaleFromSettings = (settings: Settings): Scale[] => {
  const result: Scale[] = [];
  const {
    scale,
  } = settings;


  // if (scale.Major) result.push(VALID_MAJOR_SCALE. );
  // if (scale.MinorHarmonic) result.push(...VALID_MINOR_HARMONIC_SCALE);
  // if (scale.Jazz) result.push(...VALID_JAZZ_SCALE);
  // if (scale.MinorMelodic) result.push(...VALID_MINOR_MELODIC);
  // if (scale.MinorNatural) result.push(...VALID_MINOR_NATURAL);
  // if (scale.Pentatonic) result.push(...VALID_PENTATONIC);
  // if (scale.Blues) result.push(...VALID_BLUES);
  return VALID_MAJOR_SCALE;
};

export const SettingsService : ISettingsPorts = {
  pickScaleFromSettings,
};

