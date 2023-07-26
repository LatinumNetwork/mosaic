import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React from 'react';

type FontWeightVariant = 'regular' | 'medium' | 'semiBold' | 'bold';

export const fontWeightMapping: Record<FontWeightVariant, number> = {
  regular: 400,
  medium: 500,
  semiBold: 800,
  bold: 900,
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
export const Typography = ({
  children,
  weight = 'regular',
  component,
  ...props
}: TypographyProps): React.JSX.Element => {
  return (
    <TypographyRoot component={component} weight={weight} {...props}>
      {children}
    </TypographyRoot>
  );
};
