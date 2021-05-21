import '../../style/_fonts.css';
import * as CSS from 'csstype';
import { createUseStyles } from 'react-jss';
import generator from '../../utils/gradientGenerator';
import { LightenDarkenColor } from '../../utils/_func';
import theme from '../../style';
import { IGradient } from '../types';

interface IStyle extends IGradient, CSS.Properties {}

export default createUseStyles({
  button: {
    color: (props: IStyle) => props.color || theme.colorPrimary,
    background: (props: IStyle) =>
      generator(
        props.gradientType ? props.gradientType : 'linear',
        props.gradientColors ? props.gradientColors : theme.defaultGradient,
        props.degree ? props.degree : 90
      ),
    border: 'none',
    borderRadius: (props: IStyle) =>
      props.borderRadius ? props.borderRadius : 8,
    cursor: 'pointer',
    padding: '15px 32px',
    transition: 'background 1000ms ease-out',
    '&:not([disabled])&:hover': {
      color: (props: IStyle) =>
        LightenDarkenColor(props.color ? props.color : theme.colorPrimary, -10),
      background: (props: IStyle) =>
        generator(
          props.gradientType ? props.gradientType : 'linear',
          props.gradientColors
            ? props.gradientColors
            : theme.gradientThemes['pink-sunflower']['inverse-primary'],
          props.degree ? props.degree : 90
        ),
    },
    '&:focus': {
      outline: 'none',
    },
    '&[disabled]': {
      opacity: 0.3,
      cursor: 'unset',
    },
  },
  label: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 15,
    fontWeight: 600,
    textTransform: 'uppercase',
  },
});
