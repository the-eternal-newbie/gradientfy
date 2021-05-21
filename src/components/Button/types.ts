import * as React from 'react';
import { IGradient } from '../types';

export type IButton = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  type?: string;
  disabled?: boolean;
  dataTestId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  IGradient;
