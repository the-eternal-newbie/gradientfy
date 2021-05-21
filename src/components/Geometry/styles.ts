import '../../style/_fonts.css';
import * as CSS from 'csstype';
import { createUseStyles } from 'react-jss';
import generator from '../../utils/gradientGenerator';
import theme from '../../style';
import { IGradient } from '../types';

interface IStyle extends IGradient, CSS.Properties {
  radius?: number;
}

export default createUseStyles({
  circle: {
    width: (props: IStyle) => (props.radius ? props.radius : '100px'),
    height: (props: IStyle) => (props.radius ? props.radius : '100px'),
    background: (props: IStyle) =>
      generator(
        props.gradientType ? props.gradientType : 'linear',
        props.gradientColors ? props.gradientColors : theme.defaultGradient,
        props.degree ? props.degree : 90
      ),
    borderRadius: (props: IStyle) =>
      props.borderRadius ? props.borderRadius : '50%',
  },
  label: {
    fontFamily: "'Lato', sans-serif",
    fontSize: 15,
    fontWeight: 600,
    textTransform: 'uppercase',
  },
});
