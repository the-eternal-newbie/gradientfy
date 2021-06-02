import * as React from 'react';
import { GradientFigure } from './styles';
import { ICircle } from './types';

const Circle: React.FC<ICircle> = (props: ICircle) => {
  const { radius, children, color = '', dataTestId = 'button' } = props;

  const rootProps = {
    width: radius,
    height: radius,
    color,
    'data-testid': dataTestId,
  };

  return (
    <GradientFigure {...rootProps}>
      {children ? children : <p>&nbsp;</p>}
    </GradientFigure>
  );
};

export default Circle;
