import { GraphTooltipPositionProps } from './utils';
export interface GraphTooltipProps extends GraphTooltipPositionProps {
    rows: {
        label?: string;
        value?: string | number;
    }[];
    open?: boolean;
}
export declare const GraphTooltip: ({ disablePortal, offsetLeft, offsetTop, position, arrowPosition, valueAdornments, left, top, rows, open, sx, }: GraphTooltipProps) => import("react/jsx-runtime").JSX.Element | null;
