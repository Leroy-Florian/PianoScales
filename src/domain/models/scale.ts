import {Keys} from '../../constants/validGuesses';
import {Translate} from './translate';

export type Scale = {
    key : Keys[number];
    notes: number[],
    notation : Translate
}
