export interface IGradient {
  textColor?: string;
  degree?: number;
  gradientFill?: 'full' | 'border';
  gradientType?: 'linear' | 'radial';
  gradientColors?: { color: string; percent: number }[];
}
