import * as React from 'react';
import useStyles from './styles';
import { ICircle } from './types';

const Circle: React.FC<ICircle> = (props: ICircle) => {
  const { radius, children, color = '', dataTestId = 'button' } = props;
  const classes = useStyles({ color });

  const rootProps = {
    radius: radius,
    className: classes.circle,
    'data-testid': dataTestId,
  };

  return (
    <div {...rootProps}>
      <span className={classes.label}>
        {children ? children : <p>&nbsp;</p>}
      </span>
    </div>
  );
};

export default Circle;
