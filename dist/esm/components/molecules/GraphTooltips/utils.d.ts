import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';
export type ArrowPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipPosition = 'top-start' | 'top' | 'top-end' | 'right' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left';
export interface TooltipParams<T> {
    tooltipOpen: boolean;
    tooltipLeft?: number;
    tooltipTop?: number;
    tooltipData?: T;
    showTooltip: (args: ShowTooltipArgs<T>) => void;
    hideTooltip: () => void;
}
export interface ShowTooltipArgs<T> {
    tooltipData: T;
    tooltipLeft?: number;
    tooltipTop?: number;
}
export type GraphTooltipData = {
    data: {
        label?: string;
        value?: string | number;
    }[];
    graphProps?: GraphTooltipPositionProps;
};
export interface GraphTooltipPositionProps {
    disablePortal?: boolean;
    arrowPosition?: ArrowPosition;
    position?: TooltipPosition;
    left?: number;
    top?: number;
    offsetLeft?: number;
    offsetTop?: number;
    valueAdornments?: {
        prefix?: string;
        suffix?: string;
    };
    sx?: SxProps;
}
/**
 * Generates CSS styles for the tooltip arrow based on its color and position.
 * @param arrowColor - The color of the tooltip arrow.
 * @param position - The position of the arrow relative to the tooltip.
 * @returns An object containing CSS styles for the tooltip arrow.
 */
export declare const getArrowStyles: (arrowColor: string, position: ArrowPosition) => {};
/**
 * Generates CSS styles for positioning the tooltip based on its position.
 * @param position - The position of the tooltip.
 * @returns An object containing CSS styles for the tooltip position.
 */
export declare const getTooltipPositionStyles: (position: TooltipPosition) => CSSProperties;
/**
 * Returns the opposite tooltip and arrow position names.
 * @param tooltipPosition - The current position of the tooltip.
 * @param arrowPosition - The current position of the arrow.
 * @returns An object containing the inversed tooltip and arrow position names.
 */
export declare const getInversePosition: (tooltipPosition: TooltipPosition, arrowPosition: ArrowPosition) => {
    container: TooltipPosition;
    arrow: ArrowPosition;
};
