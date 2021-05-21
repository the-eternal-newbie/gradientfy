import * as React from 'react';
import useStyles from './styles';
import { IButton } from './types';

const Button: React.FC<IButton> = (props: IButton) => {
  const {
    children,
    onClick = () => {},
    disabled = false,
    type = 'submit',
    color = '',
    dataTestId = 'button',
  } = props;
  const classes = useStyles({ color });

  const handleClick = () => {
    if (!disabled && onClick) onClick();
  };

  const rootProps = {
    className: classes.button,
    type,
    onClick: handleClick,
    disabled,
    'data-testid': dataTestId,
  };

  return (
    <button {...rootProps}>
      <span className={classes.label}>{children}</span>
    </button>
  );
};

export default Button;
