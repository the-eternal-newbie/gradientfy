import React from 'react';

export interface IButton {
  children: React.ReactNode;
  onClick: () => unknown;
  disabled: boolean;
  type: 'submit';
  color: string;
  dataTestId: string;
}
