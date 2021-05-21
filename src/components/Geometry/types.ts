import * as React from 'react';
import { IGradient } from '../types';

export type ICircle = {
  radius: number;
  children?: React.ReactNode;
  color?: string;
  dataTestId?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  IGradient;
