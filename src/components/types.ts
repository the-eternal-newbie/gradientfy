export interface IGradient {
  textColor?: string;
  degree?: number;
  gradientType?: 'linear' | 'radial';
  gradientColors?: { color: string; percent: number }[];
}
