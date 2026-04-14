import { BoxProps } from '@mui/material';
import { TypographyProps } from 'src/components/atoms/Typography';
import { ArrowPosition } from '../utils';
export interface StyledGraphTooltipProps extends BoxProps {
    arrowPosition: ArrowPosition;
}
export declare const StyledGraphTooltip: import("styled-components").StyledComponent<import("@mui/types").OverridableComponent<import("@mui/system").BoxTypeMap<{}, "div", import("@mui/material").Theme>>, import("@mui/material/styles/createTheme").Theme, import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles/createTheme").Theme> & StyledGraphTooltipProps, never>;
export declare const Label: import("styled-components").StyledComponent<(props: TypographyProps & {
    isSingleItem: boolean;
}) => import("react/jsx-runtime").JSX.Element, import("@mui/material/styles/createTheme").Theme, import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles/createTheme").Theme>, never>;
export declare const Value: import("styled-components").StyledComponent<(props: TypographyProps) => import("react/jsx-runtime").JSX.Element, import("@mui/material/styles/createTheme").Theme, import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles/createTheme").Theme>, never>;
export declare const UnitMeasurement: import("styled-components").StyledComponent<(props: TypographyProps) => import("react/jsx-runtime").JSX.Element, import("@mui/material/styles/createTheme").Theme, import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles/createTheme").Theme>, never>;
