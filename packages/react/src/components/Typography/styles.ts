import { cva } from 'class-variance-authority';

export const typographyStyles = cva([], {
  variants: {
    size: {
      small: 'text-sm',
      medium: 'text-md',
      large: 'text-lg',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
});
