import { keyframes } from "styled-components";

export const generator = (
  type: 'linear' | 'radial',
  colors: { color: string; percent: number }[],
  deg?: number
) => {
  const gradient = `${type}-gradient(${
    type === 'linear' ? deg + 'deg' : 'circle'
  }, ${colors.map((color, i) => `${color.color} ${color.percent}%`)});`;
  console.log(gradient);
  return gradient;
};


export const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;