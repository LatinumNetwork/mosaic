import { BoxProps } from '@mui/material';
import { ComponentType, ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { BaseCardBodyProps, BaseCardFooterProps, BaseCardHeaderProps } from 'src/components';
export type BaseCardProps = BoxProps & {
    children?: ReactNode;
};
type BaseCardComponent = ForwardRefExoticComponent<BaseCardProps & RefAttributes<HTMLDivElement>> & {
    Header: ComponentType<BaseCardHeaderProps>;
    Body: ComponentType<BaseCardBodyProps>;
    Footer: ComponentType<BaseCardFooterProps>;
};
export declare const BaseCard: BaseCardComponent;
export default BaseCard;
