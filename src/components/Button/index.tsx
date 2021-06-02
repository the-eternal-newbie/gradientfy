import * as React from 'react';
import { StyledButton, Label } from './styles';
import { IButton } from './types';

const Button: React.FC<IButton> = (props: IButton) => {
  const {
    children,
    onClick = () => {},
    disabled = false,
    type = 'submit',
    color = '',
    dataTestId = 'button',
    gradientFill = 'full',
  } = props;

  const handleClick = () => {
    if (!disabled && onClick) onClick();
  };

  const rootProps = {
    type,
    color,
    onClick: handleClick,
    disabled,
    'data-testid': dataTestId,
  };

  return gradientFill === 'full' ? (
    <StyledButton {...rootProps}>
      <Label>{children}</Label>
    </StyledButton>
  ) : (
    // <button {...rootProps}>
    //   <span className={classes.label}>{children}</span>
    // </button>
    <StyledButton {...rootProps}>
      <Label>{children}</Label>
    </StyledButton>
  );
};

export default Button;
