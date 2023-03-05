import { typographyStyles } from './styles';
import { TypographyProps, TypographyStylesProps } from './types';

function Typography({ variant, children, ...rest }: TypographyProps) {
  const [size, weight] = variant.split('/') as [
    TypographyStylesProps['size'],
    TypographyStylesProps['weight'],
  ];

  return (
    <p className={typographyStyles({ size, weight, ...rest })}>{children}</p>
  );
}

Typography.displayName = 'Typography';

export default Typography;
