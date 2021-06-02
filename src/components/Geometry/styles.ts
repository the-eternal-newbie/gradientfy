import '../../style/_fonts.css';
import * as CSS from 'csstype';
import styled from 'styled-components';
import { generator, gradient } from '../../utils/gradientGenerator';
import theme from '../../style';
import { IGradient } from '../types';

interface IStyle extends IGradient, CSS.Properties {}

export const GradientFigure = styled.div`
  width: ${(props: IStyle) => (props.width ? props.width : '100px')};
  height: ${(props: IStyle) => (props.height ? props.height : '100px')};
  background: ${(props: IStyle) =>
    generator(
      props.gradientType ? props.gradientType : 'linear',
      props.gradientColors ? props.gradientColors : theme.defaultGradient,
      props.degree ? props.degree : 90
    )};
  border-radius: ${(props: IStyle) =>
    props.borderRadius ? props.borderRadius : '50%'};
  background-size: 400% 400%;
  animation: ${gradient} 5s ease infinite;
`;
