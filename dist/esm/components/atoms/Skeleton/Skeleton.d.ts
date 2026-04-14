import { SxProps, Theme } from '@mui/material';
export interface SkeletonProps {
    variant: 'circular' | 'rectangular';
    sx?: SxProps<Theme>;
    height: string;
    width: string;
}
export declare const Skeleton: ({ sx, variant, width, height }: SkeletonProps) => import("react/jsx-runtime").JSX.Element;
