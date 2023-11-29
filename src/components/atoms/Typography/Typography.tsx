import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';

type FontWeightVariant = 'regular' | 'medium' | 'semiBold' | 'bold';

export const fontWeightMapping: Record<FontWeightVariant, number> = {
  regular: 400,
  medium: 600,
  semiBold: 700,
  bold: 800,
};

export interface TypographyProps extends MuiTypographyProps {
  /**
   * @default 'regular'
   */
  weight?: FontWeightVariant;
}

const TypographyRoot = styled(MuiTypography, {
  shouldForwardProp: (prop: string | number | symbol) => {
    return prop !== 'weight';
  },
})<TypographyProps>`
  font-weight: ${({ weight }) =>
    weight ? fontWeightMapping[weight as FontWeightVariant] : 'inherit'};
`;

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    { children, weight = 'regular', component, ...otherProps }: TypographyProps,
    ref
  ) => (
    <TypographyRoot
      component={component}
      weight={weight}
      ref={ref}
      {...otherProps}
    >
      {children}
    </TypographyRoot>
  )
);
