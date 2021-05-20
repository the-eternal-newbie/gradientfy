import { createUseStyles } from 'react-jss';
import generator from '../../utils/gradientGenerator';
import theme from '../../style';

interface IProps {
  color?: string;
  degree?: number;
  gradientType?: 'linear' | 'radial';
  colors?: { color: string; percent: number }[];
}

export default createUseStyles({
  button: {
    color: (props: IProps) => props.color || theme.colorPrimary,
    // background: 'rgb(254,218,65)',
    background: (props: IProps) =>
      generator(
        props.gradientType ? props.gradientType : 'linear',
        props.colors ? props.colors : theme.defaultGradient,
        props.degree ? props.degree : 90
      ),
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    padding: '15px 32px',
    transition: 'all 250ms',
    '&:not([disabled])&:hover': {
      color: 'white',
      backgroundColor: (props: IProps) => props.color || theme.colorPrimary,
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
    fontWeight: 'bold',
  },
});
