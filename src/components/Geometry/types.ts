import * as React from 'react';
import { IGradient } from '../types';

export type ISquare = {
  width?: 0 | (string & {});
  height?: 0 | (string & {});
  children?: React.ReactNode;
  color?: string;
  dataTestId?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  IGradient;

export type ICircle = {
  radius: 0 | (string & {});
} & ISquare;
