import * as React from 'react';
import { GradientFigure } from './styles';
import { ISquare } from './types';

const Square: React.FC<ISquare> = (props: ISquare) => {
  const { style, color = '', dataTestId = 'button' } = props;

  const rootProps = {
    style,
    color,
    'data-testid': dataTestId,
  };

  return <GradientFigure {...rootProps} />;
};

export default Square;
