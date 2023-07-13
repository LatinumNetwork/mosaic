import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography';
import styled from 'styled-components';

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
  weight: FontWeightVariant;
}

const TypographyRoot = styled(MuiTypography).withConfig({
  shouldForwardProp: (prop: keyof TypographyProps) => {
    return prop !== 'weight';
  },
})<TypographyProps>`
  font-weight: ${({ weight }) =>
    weight ? fontWeightMapping[weight as FontWeightVariant] : 'inherit'};
`;

const Typography = ({ children, ...props }: TypographyProps): JSX.Element => {
  return <TypographyRoot {...props}>{children}</TypographyRoot>;
};

export default Typography;
