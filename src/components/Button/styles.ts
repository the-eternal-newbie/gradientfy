import '../../style/_fonts.css';
import styled, { keyframes } from 'styled-components';
import * as CSS from 'csstype';
import { LightenDarkenColor } from '../../utils/_func';
import { generator, gradient } from '../../utils/gradientGenerator';
import theme from '../../style';
import { IGradient } from '../types';

interface IStyle extends IGradient, CSS.Properties {}

export const StyledButton = styled.button`
  color: ${(props: IStyle) => props.color || theme.colorPrimary};
  background: ${(props: IStyle) =>
    generator(
      props.gradientType ? props.gradientType : 'linear',
      props.gradientColors ? props.gradientColors : theme.defaultGradient,
      props.degree ? props.degree : 90
    )};
  border: none;
  border-radius: ${(props: IStyle) =>
    props.borderRadius ? props.borderRadius : '50px'};
  cursor: pointer;
  background-size: 300% 100%;
  padding: 15px 32px;
  /* transition: background 1000ms ease-out; */
  &:hover {
    color: ${(props: IStyle) =>
      LightenDarkenColor(props.color ? props.color : theme.colorPrimary, -10)};
    /* background: ${(props: IStyle) =>
      generator(
        props.gradientType ? props.gradientType : 'linear',
        props.gradientColors
          ? props.gradientColors
          : theme.gradientThemes['pink-sunflower']['inverse-primary'],
        props.degree ? props.degree : 90
      )}; */
    background-size: 400% 400%;
    animation: ${gradient} 5s ease infinite;
  }
`;

/* '&:not([disabled])&:hover': {
      
    }, */

// '&:focus': {
//   outline: 'none',
// },
// '&[disabled]': {
//   opacity: 0.3,
//   cursor: 'unset',
// },

export const Label = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;
