const generator = (
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

export default generator;
