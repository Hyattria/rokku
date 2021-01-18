import { BaseTypeProps } from '../utils';

export type LoadingType = 'circular' | 'spinner' | 'ball';

export interface LoadingProps extends BaseTypeProps {
  size?: string | number;
  color?: string;
  vertical?: boolean;
  textSize?: string | number;
  type?: LoadingType;
}
