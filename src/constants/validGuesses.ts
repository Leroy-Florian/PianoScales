/* eslint-disable no-unused-vars */
import {
  A_MAJOR_SCALE, Am_HARMONIC_SCALE,
  B_MAJOR_SCALE, Bm_HARMONIC_SCALE,
  C_MAJOR_SCALE,
  Cm_HARMONIC_SCALE,
  D_MAJOR_SCALE,
  Dm_HARMONIC_SCALE,
  E_MAJOR_SCALE,
  Em_HARMONIC_SCALE,
  F_MAJOR_SCALE,
  Fm_HARMONIC_SCALE,
  G_MAJOR_SCALE, Gm_HARMONIC_SCALE,
} from './strings';
import {array} from 'prop-types';
import {Scale} from '../domain/models/scale';
import {Settings} from '../domain/models/settings';


export enum Keys{
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  A = 'A',
  B = 'B',
  Cm = 'Cm',
  Dm = 'Dm',
  Em = 'Em',
  Fm = 'Fm',
  Gm = 'Gm',
  Am = 'Am',
  Bm = 'Bm',
}


export const VALID_MAJOR_SCALE: Scale[] = [
  {
    key: Keys.C,
    notes: [48, 50, 52, 53, 55, 57, 59],
    notation: C_MAJOR_SCALE,
  },
];
//   {
//     key: Keys.D,
//     notes: ['D', 'E', 'F', 'G', 'A', 'B', 'C', 'S'],
//     notation: D_MAJOR_SCALE,
//   },
//   {
//     key: Keys.E,
//     notes: ['E', 'F', 'G', 'A', 'B', 'C', 'D', 'E'],
//     notation: E_MAJOR_SCALE,
//   },
//   {
//     key: Keys.F,
//     notes: ['F', 'G', 'A', 'B', 'C', 'D', 'E', 'F'],
//     notation: F_MAJOR_SCALE,
//   },
//   {
//     key: Keys.G,
//     notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
//     notation: G_MAJOR_SCALE,
//   },
//   {
//     key: Keys.A,
//     notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'],
//     notation: A_MAJOR_SCALE,
//   },
//   {
//     key: Keys.B,
//     notes: ['B', 'C', 'D', 'E', 'F', 'G', 'A', 'B'],
//     notation: B_MAJOR_SCALE,
//   },
// ];
//
// const VALID_MINOR_HARMONIC_SCALE: Scale[] = [
//   {
//     key: Keys.Cm,
//     notes: ['H', 'A', 'R', 'M', 'O', 'N', 'I', 'C'],
//     notation: Cm_HARMONIC_SCALE,
//   },
//   {
//     key: Keys.Dm,
//     notes: ['D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'],
//     notation: Dm_HARMONIC_SCALE,
//   },
//   {
//     key: Keys.Em,
//     notes: ['E', 'F', 'G', 'A', 'B', 'C', 'D', 'E'],
//     notation: Em_HARMONIC_SCALE,
//   },
//   {
//     key: Keys.Fm,
//     notes: ['F', 'G', 'A', 'B', 'C', 'D', 'E', 'F'],
//     notation: Fm_HARMONIC_SCALE,
//   },
//   {
//     key: Keys.Gm,
//     notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
//     notation: Gm_HARMONIC_SCALE,
//   },
//   {
//     key: Keys.Am,
//     notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'],
//     notation: Am_HARMONIC_SCALE,
//   },
//   {
//     key: Keys.Bm,
//     notes: ['B', 'C', 'D', 'E', 'F', 'G', 'A', 'B'],
//     notation: Bm_HARMONIC_SCALE,
//   },
// ];
// const VALID_JAZZ_SCALE: Scale[] = [
//   {
//     notes: ['J', 'A', 'Z', 'Z', 'Z', 'Z', 'Z', 'Z'],
//     FRNotation: JAZZ_SCALE,
//     ENNotation: JAZZ_SCALE,
//   },
// ];
//
// const VALID_MINOR_MELODIC: Scale[] = [
//   {
//     notes: ['M', 'E', 'L', 'O', 'D', 'I', 'C'],
//     FRNotation: Cm_MELODIC_SCALE,
//     ENNotation: Cm_MELODIC_SCALE,
//   },
// ];
//
// const VALID_MINOR_NATURAL: Scale[] = [
//   {
//     notes: ['N', 'A', 'T', 'U', 'R', 'A', 'L'],
//     FRNotation: Cm_NATURAL_SCALE,
//     ENNotation: Cm_NATURAL_SCALE,
//   },
// ];
//
// const VALID_PENTATONIC: Scale[] = [
//   {
//     notes: ['P', 'E', 'N', 'T', 'A', 'T', 'O', 'N'],
//     FRNotation: PENTATONIC_SCALE,
//     ENNotation: PENTATONIC_SCALE,
//   },
// ];
//
// const VALID_BLUES: Scale[] = [
//   {
//     notes: ['B', 'L', 'U', 'E', 'S'],
//     FRNotation: BLUES_SCALE,
//     ENNotation: BLUES_SCALE,
//   },
// ];
