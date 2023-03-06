import { ReactNode } from 'react';

import type { VariantProps } from 'class-variance-authority';

import { typographyStyles } from './styles';

export type TypographyStylesProps = VariantProps<typeof typographyStyles>;

export interface TypographyProps
  extends Omit<TypographyStylesProps, 'size' | 'weight'> {
  variant: `${NonNullable<TypographyStylesProps['size']>}/${NonNullable<
    TypographyStylesProps['weight']
  >}`;
  children: ReactNode;
}
