import * as _mui_material from '@mui/material';
import { SxProps, Checkbox, Radio, SelectProps, TooltipProps, BoxProps, Theme, SwitchProps as SwitchProps$1, Switch as Switch$1, CustomPaletteOptions, PaletteOptions } from '@mui/material';
export * from '@mui/material';
export { RadioProps as CustomRadioProps, SelectProps as CustomSelectProps, TooltipProps as CustomTooltipProps } from '@mui/material';
import * as react$1 from 'react';
import react__default, { ReactNode, ForwardRefExoticComponent, RefAttributes, ComponentType, CSSProperties } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { BreadcrumbsProps as BreadcrumbsProps$1 } from '@mui/material/Breadcrumbs';
import { ButtonProps as ButtonProps$1 } from '@mui/material/Button';
import * as styled_components from 'styled-components';
import * as _mui_system from '@mui/system';
import * as _mui_material_styles_createTheme from '@mui/material/styles/createTheme';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';
import * as _mui_types from '@mui/types';
import { StreamlineIcons as StreamlineIcons$1 } from 'src/types';
import { TypographyProps as TypographyProps$1 } from '@mui/material/Typography';
import { BaseCardHeaderProps as BaseCardHeaderProps$1, BaseCardBodyProps as BaseCardBodyProps$1, BaseCardFooterProps as BaseCardFooterProps$1 } from 'src/components';
import { CustomColorShades, DefaultColors } from '@mui/material/styles';
export { StyledEngineProvider, ThemeProvider, useTheme } from '@mui/material/styles';
import * as react from '@phosphor-icons/react';
export { react as Icon };

type BaseCardBodyProps = {
    children: ReactNode;
    sx?: SxProps;
};
declare const BaseCardBody: react$1.ForwardRefExoticComponent<BaseCardBodyProps & react$1.RefAttributes<HTMLDivElement>>;

type BaseCardHeaderProps = {
    hideSeparator?: boolean;
    sx?: SxProps;
    children?: ReactNode;
};
declare const BaseCardHeader: react$1.ForwardRefExoticComponent<BaseCardHeaderProps & react$1.RefAttributes<HTMLDivElement>>;

type BaseCardFooterProps = {
    hideSeparator?: boolean;
    children: ReactNode;
    sx?: SxProps;
};
declare const BaseCardFooter: react$1.ForwardRefExoticComponent<BaseCardFooterProps & react$1.RefAttributes<HTMLDivElement>>;

type BreadcrumbsProps = BreadcrumbsProps$1;
declare const Breadcrumbs: ({ children, ...props }: BreadcrumbsProps) => react_jsx_runtime.JSX.Element;

type Variant = 'primary' | 'secondary' | 'tertiary' | 'text' | 'link' | 'nav';
type OmitMuiButtonWrapperProps = Omit<ButtonProps$1, 'variant'>;
interface ButtonWrapperProps extends OmitMuiButtonWrapperProps {
    variant?: Variant;
}
interface ButtonProps extends ButtonProps$1 {
    customVariant?: Variant;
}
declare const Button: react__default.ForwardRefExoticComponent<Omit<ButtonWrapperProps, "ref"> & react__default.RefAttributes<HTMLButtonElement>>;

type CustomCheckboxProps = React.ComponentProps<typeof Checkbox>;
declare const CustomCheckbox: React.FC<CustomCheckboxProps>;

declare const CustomRadio: styled_components.StyledComponent<typeof Radio, _mui_material_styles_createTheme.Theme, _mui_system.MUIStyledCommonProps<_mui_material_styles_createTheme.Theme>, never>;

declare const CustomSelect: <Value>({ children, ...props }: SelectProps<Value>) => react_jsx_runtime.JSX.Element;

declare const CustomTooltip: (props: TooltipProps) => react_jsx_runtime.JSX.Element;

interface NumberInputProps {
    value: number;
    setValue: (value: number) => void;
    min: number;
    max: number;
}
declare const NumberInput: ({ value, setValue, min, max }: NumberInputProps) => react_jsx_runtime.JSX.Element;

interface PageProps extends BoxProps {
    withHeader?: boolean;
}
declare const Page: react$1.ForwardRefExoticComponent<Omit<PageProps, "ref"> & react$1.RefAttributes<HTMLDivElement>>;

type RowProps = BoxProps;
declare const Row: styled_components.StyledComponent<_mui_types.OverridableComponent<_mui_system.BoxTypeMap<{}, "div", _mui_material.Theme>>, _mui_material_styles_createTheme.Theme, _mui_system.MUIStyledCommonProps<_mui_material_styles_createTheme.Theme> & _mui_system.BoxOwnProps<_mui_material.Theme> & _mui_material_OverridableComponent.CommonProps & Omit<Omit<react$1.DetailedHTMLProps<react$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | react$1.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof react$1.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | react$1.RefObject<HTMLDivElement> | null | undefined;
}, keyof _mui_system.BoxOwnProps<_mui_material.Theme> | keyof _mui_material_OverridableComponent.CommonProps>, never>;

interface SearchBoxProps {
    value: string;
    onChange: (newValue: string) => void;
    placeholder: string;
    sxSearchBox?: SxProps;
    sxIconContainer?: SxProps;
    iconColor?: string;
    iconSize?: number;
}
declare const SearchBox: ({ value, onChange, placeholder, sxSearchBox, sxIconContainer, iconColor, iconSize, }: SearchBoxProps) => react_jsx_runtime.JSX.Element;

interface SkeletonProps {
    variant: 'circular' | 'rectangular';
    sx?: SxProps<Theme>;
    height: string;
    width: string;
}
declare const Skeleton: ({ sx, variant, width, height }: SkeletonProps) => react_jsx_runtime.JSX.Element;

type StreamlineIconProps = {
    name: StreamlineIcons$1;
};
declare const StreamlineIcon: ({ name }: StreamlineIconProps) => react_jsx_runtime.JSX.Element;

type SwitchSize = 'small' | 'medium' | 'large';
interface SwitchProps extends SwitchProps$1 {
    switchSize: SwitchSize;
}
declare const Switch: styled_components.StyledComponent<typeof Switch$1, _mui_material_styles_createTheme.Theme, _mui_system.MUIStyledCommonProps<_mui_material_styles_createTheme.Theme> & SwitchProps, never>;

type FontWeightVariant = 'regular' | 'medium' | 'semiBold' | 'bold';
interface TypographyProps extends TypographyProps$1 {
    /**
     * @default 'regular'
     */
    weight?: FontWeightVariant;
}
declare const Typography: react$1.ForwardRefExoticComponent<Omit<TypographyProps, "ref"> & react$1.RefAttributes<HTMLElement>>;

type BaseCardProps = BoxProps & {
    children?: ReactNode;
};
type BaseCardComponent = ForwardRefExoticComponent<BaseCardProps & RefAttributes<HTMLDivElement>> & {
    Header: ComponentType<BaseCardHeaderProps$1>;
    Body: ComponentType<BaseCardBodyProps$1>;
    Footer: ComponentType<BaseCardFooterProps$1>;
};
declare const BaseCard: BaseCardComponent;

interface GenericModalProps {
    tag?: string;
    title: {
        text: string;
        endIcon?: react__default.ReactNode;
    };
    leftPaneIcon?: react__default.ReactNode;
    children: react__default.ReactNode;
    open: boolean;
    onClose: () => void;
    onExited?: () => void;
    width?: number;
}
declare const GenericModal: ({ tag, title, leftPaneIcon, children, open, onClose, onExited, width, }: GenericModalProps) => react_jsx_runtime.JSX.Element;

type ArrowPosition = 'top' | 'bottom' | 'left' | 'right';
type TooltipPosition = 'top-start' | 'top' | 'top-end' | 'right' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left';
interface TooltipParams<T> {
    tooltipOpen: boolean;
    tooltipLeft?: number;
    tooltipTop?: number;
    tooltipData?: T;
    showTooltip: (args: ShowTooltipArgs<T>) => void;
    hideTooltip: () => void;
}
interface ShowTooltipArgs<T> {
    tooltipData: T;
    tooltipLeft?: number;
    tooltipTop?: number;
}
type GraphTooltipData = {
    data: {
        label?: string;
        value?: string | number;
    }[];
    graphProps?: GraphTooltipPositionProps;
};
interface GraphTooltipPositionProps {
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

interface GraphTooltipProps extends GraphTooltipPositionProps {
    rows: {
        label?: string;
        value?: string | number;
    }[];
    open?: boolean;
}
declare const GraphTooltip: ({ disablePortal, offsetLeft, offsetTop, position, arrowPosition, valueAdornments, left, top, rows, open, sx, }: GraphTooltipProps) => react_jsx_runtime.JSX.Element | null;

interface StyledGraphTooltipProps extends BoxProps {
    arrowPosition: ArrowPosition;
}

interface PrimaryCardProps {
    id?: string;
    title: string;
    description?: string;
    children?: ReactNode;
    cardActions?: ReactNode[];
    customStyles?: {
        container?: SxProps;
        header?: SxProps;
        body?: SxProps;
        footer?: SxProps;
    };
    footer?: ReactNode;
}
declare const PrimaryCard: ({ id, title, description, children, cardActions, customStyles, footer, }: PrimaryCardProps) => react_jsx_runtime.JSX.Element;

interface RangeSliderProps {
    min: number;
    max: number;
    values: [number, number];
    setValues: (value: [number, number]) => void;
    showNumberInputs?: boolean;
}
declare const RangeSlider: ({ min, max, values, setValues, showNumberInputs, }: RangeSliderProps) => react_jsx_runtime.JSX.Element;

type SecondaryCardProps = {
    id?: string;
    isLoading?: boolean;
    title?: {
        text: string;
        endIcon?: ReactNode;
    };
    cardActions?: ReactNode[];
    children: ReactNode;
    customStyles?: {
        container?: SxProps;
        header?: SxProps;
        body?: SxProps;
    };
};
declare const SecondaryCard: ({ id, isLoading, title, cardActions, children, customStyles, }: SecondaryCardProps) => react_jsx_runtime.JSX.Element;

interface ActionButtonProps {
    label: string;
    onClick: () => void;
}
interface CustomStyles {
    alert?: SxProps<Theme>;
    snackbar?: SxProps<Theme>;
    button?: SxProps<Theme>;
}
declare enum SnackbarType {
    Default = "default",
    Info = "info",
    Success = "success",
    Alert = "alert",
    Warning = "warning",
    Loading = "loading"
}
interface SnackbarProps {
    id?: string;
    type: SnackbarType;
    message: string;
    customStyles?: CustomStyles;
    customIcon?: ReactNode;
    showClose?: boolean;
    actionButton?: ActionButtonProps;
    onClose?: () => void;
}
declare function Snackbar({ id, type, message, customStyles, customIcon, showClose, actionButton, onClose, }: SnackbarProps): react_jsx_runtime.JSX.Element;

declare const ui: {
    blue: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    green: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    yellow: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    red: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    gray: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    coolGray: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
};

declare const collage: {
    raspberry: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    teal: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    citron: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    navy: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
};

declare const audience: {
    multiculturalYellow: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    generationsOrange: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    lgtbqPurple: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    genderTeal: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    parentsAndKidsGreen: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    kidsGreen: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
};

declare const themeColors: {
    primary: {
        main: string;
        dark: string;
        light: string;
    };
    secondary: {
        main: string;
        dark: string;
        light: string;
    };
    error: {
        main: string;
        light: string;
        dark: string;
    };
    warning: {
        main: string;
        light: string;
        dark: string;
    };
    success: {
        main: string;
        light: string;
        dark: string;
    };
    text: {
        primary: string;
        secondary: string;
        disabled: string;
    };
};

declare enum PaletteColors {
    collageRaspberry = "collageRaspberry",
    collageTeal = "collageTeal",
    collageCitron = "collageCitron",
    collageNavy = "collageNavy",
    audienceMulticulturalYellow = "audienceMulticulturalYellow",
    audienceGenerationsOrange = "audienceGenerationsOrange",
    audienceLgtbqPurple = "audienceLgtbqPurple",
    audienceGenderTeal = "audienceGenderTeal",
    audienceParentsAndKidsGreen = "audienceParentsAndKidsGreen",
    audienceKidsGreen = "audienceKidsGreen",
    uiBlue = "uiBlue",
    uiGreen = "uiGreen",
    uiYellow = "uiYellow",
    uiRed = "uiRed",
    uiGray = "uiGray",
    uiCoolGray = "uiCoolGray"
}
declare enum StreamlineIcons {
    Lightbulb = "lightbulb",
    PerformanceIncrease = "performance_increase",
    Like = "like",
    ShoppingBasket = "shopping_basket"
}
interface CustomColors {
    collageRaspberry?: CustomColorShades;
    collageTeal?: CustomColorShades;
    collageCitron?: CustomColorShades;
    collageNavy?: CustomColorShades;
    audienceMulticulturalYellow?: CustomColorShades;
    audienceGenerationsOrange?: CustomColorShades;
    audienceLgtbqPurple?: CustomColorShades;
    audienceGenderTeal?: CustomColorShades;
    audienceParentsAndKidsGreen?: CustomColorShades;
    audienceKidsGreen?: CustomColorShades;
    uiBlue?: CustomColorShades;
    uiGreen?: CustomColorShades;
    uiYellow?: CustomColorShades;
    uiRed?: CustomColorShades;
    uiGray?: CustomColorShades;
    uiCoolGray?: CustomColorShades;
}

interface CustomPalette {
    collageRaspberry: CustomColorShades;
    collageTeal: CustomColorShades;
    collageCitron: CustomColorShades;
    collageNavy: CustomColorShades;
    audienceMulticulturalYellow: CustomColorShades;
    audienceGenerationsOrange: CustomColorShades;
    audienceLgtbqPurple: CustomColorShades;
    audienceGenderTeal: CustomColorShades;
    audienceParentsAndKidsGreen: CustomColorShades;
    audienceKidsGreen: CustomColorShades;
    uiBlue: CustomColorShades;
    uiGreen: CustomColorShades;
    uiYellow: CustomColorShades;
    uiRed: CustomColorShades;
    uiGray: CustomColorShades;
    uiCoolGray: CustomColorShades;
    defaultColors: DefaultColors;
}
declare module '@mui/material/styles' {
    interface DefaultColors {
        black: string;
        white: string;
    }
    interface CustomColorShades {
        '50': string;
        '100': string;
        '200': string;
        '300': string;
        '400': string;
        '500': string;
        '600': string;
        '700': string;
        '800': string;
        '900': string;
    }
    interface CustomPaletteOptions {
        collageRaspberry?: CustomColorShades;
        collageTeal?: CustomColorShades;
        collageCitron?: CustomColorShades;
        collageNavy?: CustomColorShades;
        audienceMulticulturalYellow?: CustomColorShades;
        audienceGenerationsOrange?: CustomColorShades;
        audienceLgtbqPurple?: CustomColorShades;
        audienceGenderTeal?: CustomColorShades;
        audienceParentsAndKidsGreen?: CustomColorShades;
        audienceKidsGreen?: CustomColorShades;
        uiBlue?: CustomColorShades;
        uiGreen?: CustomColorShades;
        uiYellow?: CustomColorShades;
        uiRed?: CustomColorShades;
        uiGray?: CustomColorShades;
        uiCoolGray?: CustomColorShades;
        defaultColors?: DefaultColors;
    }
    interface PaletteOptions extends CustomPaletteOptions {
    }
    interface Palette extends CustomPalette {
    }
    interface Theme {
        customPalette: CustomPalette;
    }
    interface ThemeOptions {
        customPalette?: CustomPaletteOptions;
    }
    interface TypographyVariants {
        b1: CSSProperties;
        b2: CSSProperties;
        b3: CSSProperties;
        caption: CSSProperties;
    }
    interface TypographyVariantsOptions {
        b1?: CSSProperties;
        b2?: CSSProperties;
        b3?: CSSProperties;
        caption?: CSSProperties;
    }
    interface ButtonVariants {
        primary: string;
        secondary: string;
        tertiary: string;
        link: string;
        nav: string;
        text: string;
    }
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        tertiary: true;
        link: true;
        nav: true;
        text: true;
        filled: false;
        contained: false;
    }
}
declare module '@mui/material/styles/createTheme' {
    interface Theme {
        customPalette: CustomPalette;
    }
    interface ThemeOptions {
        customPalette?: CustomPaletteOptions;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface Palette extends CustomPalette {
    }
    interface PaletteOptions extends CustomPaletteOptions {
    }
}
declare module '@mui/material/Typography/Typography' {
    interface TypographyPropsVariantOverrides {
        b1: true;
        b2: true;
        b3: true;
        caption: true;
        h4: false;
        h5: false;
        h6: false;
        subtitle1: false;
        subtitle2: false;
        body1: false;
        body2: false;
        button: false;
        overline: false;
        poster: false;
    }
}
declare module '@mui/material/Button/Button' {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        tertiary: true;
        link: true;
        nav: true;
        text: true;
        filled: false;
        contained: false;
    }
    interface ButtonPropsColorOverrides {
        basic: false;
        info: false;
        success: false;
        secondary: false;
        inherit: false;
    }
}

declare const palette: PaletteOptions;
declare const theme: _mui_material_styles_createTheme.Theme;

/**
 * Convert hex color to rgba format
 * @param hex Hex color code (e.g., #RRGGBB or #RGB)
 * @param opacity Opacity value as a percentage (0-100)
 * @returns RGBA color string
 */
declare const hexToRgba: (hex: string, opacity: number) => string;

export { BaseCard, BaseCardBody, BaseCardBodyProps, BaseCardFooter, BaseCardFooterProps, BaseCardHeader, BaseCardHeaderProps, BaseCardProps, Breadcrumbs, BreadcrumbsProps, Button, ButtonProps, CustomCheckbox, CustomCheckboxProps, CustomColors, CustomRadio, CustomSelect, CustomTooltip, GenericModal, GenericModalProps, GraphTooltip, GraphTooltipData, GraphTooltipPositionProps, GraphTooltipProps, NumberInput, NumberInputProps, Page, PageProps, PaletteColors, PrimaryCard, PrimaryCardProps, RangeSlider, RangeSliderProps, Row, RowProps, SearchBox, SearchBoxProps, SecondaryCard, SecondaryCardProps, ShowTooltipArgs, Skeleton, SkeletonProps, Snackbar, SnackbarProps, SnackbarType, StreamlineIcon, StreamlineIconProps, StreamlineIcons, StyledGraphTooltipProps, Switch, SwitchProps, TooltipParams, Typography, TypographyProps, audience, collage, hexToRgba, palette, theme, themeColors, ui };
