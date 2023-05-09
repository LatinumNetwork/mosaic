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
    weight?: FontWeightVariant;
}

const TypographyRoot = styled(MuiTypography).withConfig({
    shouldForwardProp: (prop) =>  {
        console.log('stuff?', prop);
        return prop !== 'weight';
    },
})`
    font-weight: ${({ weight }) =>
        weight ? fontWeightMapping[weight] : 'inherit'};
`;

const Typography = (props: TypographyProps): JSX.Element => {
    console.log('file: Typography.tsx:30 ~ props:', props);
    return <TypographyRoot {...props} />;
};

export default Typography;
