import { SxProps } from '@mui/material';
export interface SearchBoxProps {
    value: string;
    onChange: (newValue: string) => void;
    placeholder: string;
    sxSearchBox?: SxProps;
    sxIconContainer?: SxProps;
    iconColor?: string;
    iconSize?: number;
}
export declare const SearchBox: ({ value, onChange, placeholder, sxSearchBox, sxIconContainer, iconColor, iconSize, }: SearchBoxProps) => import("react/jsx-runtime").JSX.Element;
