import type { ComponentMeta } from '@storybook/react';
import { Typography, type TypographyProps } from '.';

export default {
  title: 'Data Display/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

interface StoryProps {
  variants: TypographyProps['variant'][];
}

export const Small = {
  render: ({ variants }: StoryProps) => (
    <div>
      {variants.map((variant) => (
        <Typography variant={variant} key={variant}>
          {variant}
        </Typography>
      ))}
    </div>
  ),
  args: {
    variants: ['small/light', 'small/normal', 'small/semibold', 'small/bold'],
  },
};

export const Medium = {
  render: ({ variants }: StoryProps) => (
    <div>
      {variants.map((variant) => (
        <Typography variant={variant} key={variant}>
          {variant}
        </Typography>
      ))}
    </div>
  ),
  args: {
    variants: [
      'medium/light',
      'medium/normal',
      'medium/semibold',
      'medium/bold',
    ],
  },
};

export const Large = {
  render: ({ variants }: StoryProps) => (
    <div>
      {variants.map((variant) => (
        <Typography variant={variant} key={variant}>
          {variant}
        </Typography>
      ))}
    </div>
  ),
  args: {
    variants: ['large/light', 'large/normal', 'large/semibold', 'large/bold'],
  },
};
