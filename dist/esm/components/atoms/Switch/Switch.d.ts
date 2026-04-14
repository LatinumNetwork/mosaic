import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material';
type SwitchSize = 'small' | 'medium' | 'large';
export interface SwitchProps extends MuiSwitchProps {
    switchSize: SwitchSize;
}
export declare const Switch: import("styled-components").StyledComponent<typeof MuiSwitch, import("@mui/material/styles/createTheme").Theme, import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles/createTheme").Theme> & SwitchProps, never>;
export {};
