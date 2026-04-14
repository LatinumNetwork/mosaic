import { styled, Box, Checkbox, Radio, useTheme, Select, Tooltip, tooltipClasses, TextField, InputAdornment, IconButton, OutlinedInput, Switch as Switch$1, Dialog, Stack, Portal, Slider, Typography as Typography$1, Alert, Button as Button$1, CircularProgress, createTheme } from '@mui/material';
export * from '@mui/material';
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import React, { forwardRef, useState, useEffect, Fragment } from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import * as Icon from '@phosphor-icons/react';
import { CaretRight, XIcon, InfoIcon, CheckIcon, WarningIcon, WarningOctagonIcon } from '@phosphor-icons/react';
export { Icon };
import MuiButton from '@mui/material/Button';
import { styled as styled$1, useTheme as useTheme$1 } from '@mui/material/styles';
export { StyledEngineProvider, ThemeProvider, useTheme } from '@mui/material/styles';
import MuiTypography from '@mui/material/Typography';
import '@fontsource/merriweather/300-italic.css';
import '@fontsource/merriweather/300.css';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700-italic.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/merriweather/900-italic.css';
import '@fontsource/merriweather/900.css';
import '@fontsource/nunito-sans/400-italic.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/600-italic.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700-italic.css';
import '@fontsource/nunito-sans/700.css';
import '@fontsource/nunito-sans/800-italic.css';
import '@fontsource/nunito-sans/800.css';

const CardBodyStyled = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
});
const BaseCardBody = forwardRef(({ sx, children, ...rest }, ref) => (jsx(CardBodyStyled, { ref: ref, sx: sx, ...rest, children: children })));

const HeaderStyled = styled(Box, {
    shouldForwardProp: (propName) => propName !== 'hideSeparator',
})(({ theme, hideSeparator = false }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
    borderBottom: hideSeparator
        ? 'none'
        : `1px solid ${theme.palette.uiCoolGray[200]}`,
    gap: '8px',
}));
const BaseCardHeader = forwardRef(({ hideSeparator, sx, children, ...rest }, ref) => (jsx(HeaderStyled, { ref: ref, sx: sx, hideSeparator: hideSeparator, ...rest, children: children })));

const FooterStyled = styled(Box, {
    shouldForwardProp: (propName) => propName !== 'hideSeparator',
})(({ theme, hideSeparator = false }) => ({
    display: 'flex',
    padding: '16px 24px',
    borderTop: hideSeparator
        ? 'none'
        : `1px solid ${theme.palette.uiCoolGray[100]}`,
    flexShrink: 0,
}));
const BaseCardFooter = forwardRef(({ sx, children, hideSeparator, ...rest }, ref) => (jsx(FooterStyled, { hideSeparator: hideSeparator, ref: ref, sx: sx, ...rest, children: children })));

const Breadcrumbs = ({ children, ...props }) => (jsx(MuiBreadcrumbs, { separator: jsx(CaretRight, { size: 20 }), ...props, children: children }));

var PaletteColors;
(function (PaletteColors) {
    PaletteColors["collageRaspberry"] = "collageRaspberry";
    PaletteColors["collageTeal"] = "collageTeal";
    PaletteColors["collageCitron"] = "collageCitron";
    PaletteColors["collageNavy"] = "collageNavy";
    PaletteColors["audienceMulticulturalYellow"] = "audienceMulticulturalYellow";
    PaletteColors["audienceGenerationsOrange"] = "audienceGenerationsOrange";
    PaletteColors["audienceLgtbqPurple"] = "audienceLgtbqPurple";
    PaletteColors["audienceGenderTeal"] = "audienceGenderTeal";
    PaletteColors["audienceParentsAndKidsGreen"] = "audienceParentsAndKidsGreen";
    PaletteColors["audienceKidsGreen"] = "audienceKidsGreen";
    PaletteColors["uiBlue"] = "uiBlue";
    PaletteColors["uiGreen"] = "uiGreen";
    PaletteColors["uiYellow"] = "uiYellow";
    PaletteColors["uiRed"] = "uiRed";
    PaletteColors["uiGray"] = "uiGray";
    PaletteColors["uiCoolGray"] = "uiCoolGray";
})(PaletteColors || (PaletteColors = {}));
var StreamlineIcons;
(function (StreamlineIcons) {
    StreamlineIcons["Lightbulb"] = "lightbulb";
    StreamlineIcons["PerformanceIncrease"] = "performance_increase";
    StreamlineIcons["Like"] = "like";
    StreamlineIcons["ShoppingBasket"] = "shopping_basket";
})(StreamlineIcons || (StreamlineIcons = {}));

/**
 * Convert hex color to rgba format
 * @param hex Hex color code (e.g., #RRGGBB or #RGB)
 * @param opacity Opacity value as a percentage (0-100)
 * @returns RGBA color string
 */
const hexToRgba = (hex, opacity) => {
    hex = hex.replace(/^#/, '');
    if (hex.length !== 6 && hex.length !== 3) {
        throw new Error('Invalid hex color format');
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const alpha = opacity / 100;
    return `rgba(${r},${g},${b},${alpha})`;
};

const mapVariantToMui = (variant) => {
    switch (variant) {
        case 'primary':
        case 'secondary':
            return 'contained';
        case 'tertiary':
            return 'outlined';
        case 'text':
        case 'link':
        case 'nav':
            return 'text';
        default:
            return 'contained';
    }
};
const getDefaultColor = (variant) => {
    switch (variant) {
        case 'primary':
        case 'secondary':
            return PaletteColors.collageRaspberry;
        case 'tertiary':
        case 'text':
        case 'nav':
            return PaletteColors.uiGray;
        case 'link':
            return PaletteColors.uiBlue;
        default:
            return PaletteColors.collageRaspberry;
    }
};
const ButtonForwardRef = React.forwardRef(({ customVariant: _customVariant, ...props }, ref) => jsx(MuiButton, { ref: ref, ...props }));
const ButtonRoot = styled$1(ButtonForwardRef)(({ theme, customVariant, size }) => {
    const mainColor = getDefaultColor(customVariant);
    return {
        display: 'flex',
        fontSize: 16,
        padding: '8px, 16px',
        textAlign: 'center',
        borderRadius: 4,
        alignItems: 'center',
        boxShadow: 'none',
        textTransform: 'none',
        justifyContent: 'center',
        minHeight: 0,
        whiteSpace: 'nowrap',
        '&:focus-visible': {
            outline: `1px solid #D39CBA`,
            outlineOffset: '2px',
            boxShadow: `0 0 4px 0 #D39CBA`,
        },
        ...(size === 'small' && {
            fontSize: '14px',
            padding: '4px 12px',
        }),
        ...(size === 'medium' && {
            fontSize: '16px',
            padding: '8px 16px',
        }),
        ...(size === 'large' && {
            fontSize: '18px',
            padding: '12px 20px',
        }),
        ...(customVariant === 'primary' && {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.collageRaspberry[500],
            height: '40px',
            '&:hover': {
                backgroundColor: theme.palette.collageRaspberry[600],
            },
            '&:active': {
                backgroundColor: theme.palette.collageRaspberry[700],
            },
        }),
        ...(customVariant === 'secondary' && {
            color: theme.palette.collageRaspberry[600],
            border: '1px solid #D39CBA',
            backgroundColor: theme.palette.common.white,
            height: '40px',
            '&:hover,  &:focus-visible, &:active': {
                backgroundColor: hexToRgba(theme.palette.collageRaspberry[500], 10),
                borderColor: theme.palette.collageRaspberry[500],
            },
        }),
        ...(customVariant === 'tertiary' && {
            color: theme.palette.uiCoolGray[800],
            border: `1px solid ${theme.palette.uiCoolGray[200]}`,
            backgroundColor: theme.palette.common.white,
            height: '40px',
            '&:hover, &:focus-visible': {
                backgroundColor: hexToRgba(theme.palette.uiCoolGray[50], 50),
                borderColor: theme.palette.uiCoolGray[500],
            },
            '&:active': {
                backgroundColor: hexToRgba(theme.palette.uiCoolGray[100], 50),
                borderColor: theme.palette.uiCoolGray[700],
            },
        }),
        ...(customVariant === 'text' && {
            padding: '2px 4px',
            color: theme.palette[mainColor][800],
            '&:hover': {
                background: 'none',
                border: 'none',
                color: theme.palette.collageRaspberry[600],
            },
        }),
        ...(customVariant === 'link' && {
            color: theme.palette.uiBlue[500],
            background: 'none',
            padding: '2px',
            borderRadius: 2,
            minWidth: 0,
            '&:hover, &:focus-visible': {
                ':after': {
                    content: '""',
                    background: theme.palette.uiBlue[500],
                    position: 'absolute',
                    bottom: '2px',
                    left: '2px',
                    right: '2px',
                    height: '1px',
                },
                background: 'none',
            },
            '&:focus-visible': {
                outline: `1px solid ${theme.palette.uiBlue[300]}`,
                boxShadow: `0 0 4px 0 ${theme.palette.uiBlue[300]}`,
            },
        }),
        ...(customVariant === 'nav' && {
            color: theme.palette.uiGray[800],
            background: 'none',
            padding: '8px 12px',
            '&:hover, &:focus-visible': {
                backgroundColor: theme.palette.uiCoolGray[50],
            },
            '&:active': {
                color: theme.palette.collageRaspberry[500],
                backgroundColor: '#F6EAF0',
            },
        }),
        '&:disabled': {
            ...(customVariant === 'primary' && {
                backgroundColor: theme.palette.uiCoolGray[100],
                color: theme.palette.uiCoolGray[300],
            }),
            ...(customVariant === 'secondary' && {
                border: '1px solid',
                borderColor: theme.palette.uiCoolGray[100],
                color: theme.palette.uiCoolGray[300],
                backgroundColor: 'transparent',
            }),
            ...(customVariant === 'tertiary' && {
                backgroundColor: 'transparent',
                color: theme.palette.uiCoolGray[300],
                border: 'none',
            }),
        },
    };
});
const Button = React.forwardRef(({ children, variant = 'primary', size = 'medium', ...props }, ref) => {
    const muiVariant = mapVariantToMui(variant);
    return (jsx(ButtonRoot, { ref: ref, variant: muiVariant, customVariant: variant, size: size, ...props, children: children }));
});

const StyledCheckbox = styled(Checkbox)(({ theme: { palette } }) => ({
    padding: '0',
    minWidth: '26px',
    '&.Mui-checked, &.MuiCheckbox-indeterminate': {
        color: palette.uiBlue[500],
    },
}));
const CustomCheckbox = (props) => (jsx(StyledCheckbox, { icon: jsx(Icon.SquareIcon, { size: 24 }), checkedIcon: jsx(Icon.CheckSquareIcon, { size: 24, weight: "fill" }), indeterminateIcon: jsx(Icon.MinusSquareIcon, { size: 24, weight: "fill" }), ...props }));

const CustomRadio = styled(Radio)(({ theme: { palette } }) => ({
    padding: '4px',
    '&, &.Mui-checked': {
        color: palette.uiBlue[500],
    },
    ':hover': {
        backgroundColor: hexToRgba(palette.uiBlue[500], 5),
    },
}));

const CustomSelect = ({ children, ...props }) => {
    const { palette } = useTheme();
    return (jsx(Select, { IconComponent: (props) => (jsx(Icon.CaretDownIcon, { ...props, weight: "bold", color: props.disabled ? palette.uiCoolGray[800] : palette.uiCoolGray[300], style: {
                position: 'absolute',
                right: '12px',
                top: 'calc(50% - 0.5em)',
            } })), ...props, sx: {
            backgroundColor: palette.common.white,
            textAlign: 'left',
            ...props.sx,
            '&.Mui-disabled': {
                backgroundColor: 'transparent',
            },
            '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: palette.uiCoolGray[300],
            },
        }, children: children }));
};

const StyledTooltip = styled(({ children, className, ...props }) => (jsx(Tooltip, { ...props, classes: { popper: className }, children: children })))(({ theme: { palette: { uiCoolGray, common }, }, }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: uiCoolGray[900],
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: uiCoolGray[900],
        boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)',
        color: common.white,
        padding: '6px',
    },
}));
const CustomTooltip = (props) => {
    return jsx(StyledTooltip, { ...props });
};

const NumericTextField = styled(TextField)(({ theme }) => ({
    width: '120px',
    '.MuiInputBase-root': {
        padding: 0,
        '& fieldset': {
            borderColor: theme.palette.uiCoolGray[200],
        },
        '&.Mui-focused fieldset': {
            border: `1px solid ${theme.palette.uiCoolGray[300]}`,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.uiCoolGray[300],
        },
    },
    '& input[type=number]': {
        MozAppearance: 'textfield',
        WebkitAppearance: 'none',
        appearance: 'textfield',
        padding: '8px 12px 8px',
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
        },
    },
}));
const NumberInput = ({ value, setValue, min, max }) => {
    const { palette } = useTheme();
    const [inputValue, setInputValue] = useState(value.toString());
    useEffect(() => {
        setInputValue(value.toString());
    }, [value]);
    const handleIncrease = () => {
        if (value < max) {
            setValue(value + 1);
        }
    };
    const handleDecrease = () => {
        if (value > min) {
            setValue(value - 1);
        }
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleInputBlur = () => {
        let num = parseInt(inputValue);
        if (isNaN(num)) {
            setInputValue(value.toString());
            return;
        }
        if (num < min)
            num = min;
        if (num > max)
            num = max;
        setValue(num);
        setInputValue(num.toString());
    };
    return (jsx(Box, { children: jsx(NumericTextField, { value: inputValue, onChange: handleInputChange, onBlur: handleInputBlur, InputProps: {
                endAdornment: (jsx(InputAdornment, { position: "end", sx: { width: '100%', height: '100%' }, children: jsxs(Box, { sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '100%',
                            width: '100%',
                            borderLeft: `1px solid ${palette.uiCoolGray[200]}`,
                        }, children: [jsx(IconButton, { size: "small", onClick: handleIncrease, sx: {
                                    padding: '0 8px',
                                    borderRadius: 0,
                                    borderBottom: `1px solid ${palette.uiCoolGray[200]}`,
                                    height: '20px',
                                }, children: jsx(Icon.CaretUpIcon, { size: 16 }) }), jsx(IconButton, { size: "small", onClick: handleDecrease, sx: { padding: '0 8px', borderRadius: 0, height: '20px' }, children: jsx(Icon.CaretDownIcon, { size: 16 }) })] }) })),
            }, type: "number", inputProps: { min, max, inputMode: 'numeric', pattern: '[0-9]*' } }) }));
};

const Page = forwardRef(({ withHeader = false, ...restBoxProps }, ref) => {
    const dynamicStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '40px',
        paddingTop: withHeader ? '160px' : '0px',
        width: '100%',
    };
    return jsx(Box, { ...restBoxProps, sx: dynamicStyles, ref: ref });
});

const Row = styled(Box) `
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 32px;
  gap: 32px;
  flex-wrap: wrap;
`;

const SearchBox = ({ value, onChange, placeholder, sxSearchBox = {}, sxIconContainer = {}, iconColor, iconSize = 22, }) => {
    const { palette } = useTheme();
    const resolvedIconColor = iconColor || palette.uiGray[400];
    return (jsx(OutlinedInput, { value: value, onChange: (e) => onChange(e.target.value), placeholder: placeholder, fullWidth: true, sx: {
            padding: '8px 12px',
            height: '40px',
            backgroundColor: palette.common.white,
            ...sxSearchBox,
        }, startAdornment: jsx(Box, { sx: {
                display: 'flex',
                alignItems: 'center',
                paddingRight: '8px',
                height: '100%',
                color: resolvedIconColor,
                '.MuiOutlinedInput-root:focus-within &': {
                    color: palette.uiBlue[400],
                },
                ...sxIconContainer,
            }, children: jsx(Icon.MagnifyingGlassIcon, { size: iconSize, weight: "bold" }) }), endAdornment: value && (jsx(CustomTooltip, { title: "Clear", arrow: true, children: jsx(Box, { component: 'span', onClick: () => onChange(''), sx: {
                    display: 'flex',
                    alignItems: 'center',
                    flexShrink: 0,
                    cursor: 'pointer',
                    marginLeft: '8px',
                    color: iconColor || hexToRgba(palette.uiGray[800], 65),
                    '&:hover': { color: palette.uiGray[800], background: 'none' },
                }, children: jsx(Icon.XCircleIcon, { size: iconSize, weight: "bold" }) }) })) }));
};

const Wrapper = styled(Box)(({ theme: { palette }, variant }) => ({
    borderRadius: '4px',
    background: `linear-gradient(to left, ${palette.uiCoolGray[100]}, ${palette.uiGray[50]}) right`,
    backgroundSize: '1000% 1000%',
    animation: 'loading 1s ease infinite',
    ...(variant === 'circular' && { borderRadius: '50%' }),
    '@keyframes loading': {
        '0%': { backgroundPosition: '0% 82%' },
        '50%': { backgroundPosition: '100% 19%' },
        '100%': { backgroundPosition: '0% 82%' },
    },
}));
const Skeleton = ({ sx, variant, width, height }) => {
    return jsx(Wrapper, { sx: sx, width: width, height: height, variant: variant });
};

const StreamlineIcon = ({ name }) => {
    switch (name) {
        case StreamlineIcons.Lightbulb:
            return (jsx("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", "data-testid": "lightbulb-icon", children: jsxs("g", { stroke: "currentColor", children: [jsx("path", { d: "M20 36.6665V39.1665", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M25 28.8081V33.3331C25 35.7098 23 36.6664 20 36.6664C17 36.6664 15 35.7098 15 33.3331V28.8081", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M20.0001 28.6618V21.6668L16.6667 18.3335", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M24.1666 29.1668C26.1628 28.3755 27.8702 26.9944 29.0613 25.2077C30.2524 23.4211 30.8706 21.3138 30.8333 19.1668C30.7824 16.3096 29.6247 13.5836 27.6039 11.5628C25.5832 9.54213 22.8572 8.38442 20 8.3335C17.1427 8.38442 14.4167 9.54213 12.396 11.5628C10.3753 13.5836 9.21755 16.3096 9.16663 19.1668C9.12936 21.3138 9.74749 23.4211 10.9386 25.2077C12.1297 26.9944 13.8372 28.3755 15.8333 29.1668H24.1666Z", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M15 32.5H25", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M20 0.833496V4.16683", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M1.66675 17.5H5.48508", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M5.83325 5L9.16659 8.33333", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M38.3332 17.5H34.5149", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M34.1666 5L30.8333 8.33333", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M20 21.6668L23.3333 18.3335", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" })] }) }));
        case StreamlineIcons.PerformanceIncrease:
            return (jsx("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", "data-testid": "performance_increase-icon", children: jsxs("g", { stroke: "currentColor", children: [jsx("path", { d: "M0.840088 38.75H39.1734", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M7.5 38.75V34.5833C7.5 34.3623 7.4122 34.1504 7.25592 33.9941C7.09964 33.8378 6.88768 33.75 6.66667 33.75H3.33333C3.11232 33.75 2.90036 33.8378 2.74408 33.9941C2.5878 34.1504 2.5 34.3623 2.5 34.5833V38.75", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M17.5 38.7502V27.9168C17.5 27.6958 17.4122 27.4839 17.2559 27.3276C17.0996 27.1713 16.8877 27.0835 16.6667 27.0835H13.3333C13.1123 27.0835 12.9004 27.1713 12.7441 27.3276C12.5878 27.4839 12.5 27.6958 12.5 27.9168V38.7502", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M27.5 38.7498V21.2498C27.5 21.0288 27.4122 20.8169 27.2559 20.6606C27.0996 20.5043 26.8877 20.4165 26.6667 20.4165H23.3333C23.1123 20.4165 22.9004 20.5043 22.7441 20.6606C22.5878 20.8169 22.5 21.0288 22.5 21.2498V38.7498", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M37.5 38.75V14.5833C37.5 14.4739 37.4784 14.3655 37.4366 14.2644C37.3947 14.1633 37.3333 14.0715 37.2559 13.9941C37.1785 13.9167 37.0867 13.8553 36.9856 13.8134C36.8845 13.7716 36.7761 13.75 36.6667 13.75H33.3333C33.1123 13.75 32.9004 13.8378 32.7441 13.9941C32.5878 14.1504 32.5 14.3623 32.5 14.5833V38.75", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M5.00659 22.0835L35.0066 2.0835", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M34.1734 8.75L35.0068 2.08333L28.3401 1.25", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" })] }) }));
        case StreamlineIcons.Like:
            return (jsx("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", "data-testid": "like-icon", children: jsxs("g", { stroke: "currentColor", children: [jsx("path", { d: "M33.3334 26.0983C33.9965 26.0983 34.6323 26.3617 35.1012 26.8306C35.57 27.2994 35.8334 27.9353 35.8334 28.5983C35.8334 29.2614 35.57 29.8973 35.1012 30.3661C34.6323 30.8349 33.9965 31.0983 33.3334 31.0983H31.6667C32.3298 31.0983 32.9657 31.3617 33.4345 31.8306C33.9034 32.2994 34.1667 32.9353 34.1667 33.5983C34.1667 34.98 33.0467 35.265 31.6667 35.265H20.8334C16.0817 35.265 15.0001 34.4317 9.16675 33.5983V19.4317C13.2501 19.4317 20.0001 11.9317 20.0001 5.265C20.0001 2.63 23.6484 1.64833 25.0001 6.46333C25.8334 9.43167 23.3334 15.265 23.3334 15.265H36.6667C37.3298 15.265 37.9657 15.5284 38.4345 15.9972C38.9034 16.4661 39.1667 17.102 39.1667 17.765C39.1667 19.1467 38.0467 21.0983 36.6667 21.0983H35.0001C35.6631 21.0983 36.299 21.3617 36.7678 21.8306C37.2367 22.2994 37.5001 22.9353 37.5001 23.5983C37.5001 24.2614 37.2367 24.8973 36.7678 25.3661C36.299 25.8349 35.6631 26.0983 35.0001 26.0983H33.3334Z", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M9.16659 16.9316H0.833252V36.9316H9.16659V16.9316Z", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M5.41667 33.5985C5.30616 33.5985 5.20018 33.5546 5.12204 33.4764C5.0439 33.3983 5 33.2923 5 33.1818C5 33.0713 5.0439 32.9653 5.12204 32.8872C5.20018 32.809 5.30616 32.7651 5.41667 32.7651", strokeWidth: "1.66667" }), jsx("path", { d: "M5.41675 33.5985C5.52725 33.5985 5.63324 33.5546 5.71138 33.4764C5.78952 33.3983 5.83342 33.2923 5.83342 33.1818C5.83342 33.0713 5.78952 32.9653 5.71138 32.8872C5.63324 32.809 5.52725 32.7651 5.41675 32.7651", strokeWidth: "1.66667" })] }) }));
        case StreamlineIcons.ShoppingBasket:
            return (jsx("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", "data-testid": "shopping_basket-icon", children: jsxs("g", { stroke: "currentColor", children: [jsx("path", { d: "M34.435 36.1668C34.3581 36.5436 34.1533 36.8821 33.8553 37.1251C33.5573 37.3681 33.1845 37.5006 32.8 37.5002H7.2C6.8155 37.5006 6.44266 37.3681 6.14468 37.1251C5.8467 36.8821 5.6419 36.5436 5.565 36.1668L2.5 20.8335H37.5L34.435 36.1668Z", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M2.49992 15.8335H37.4999C37.4999 15.8335 39.1666 15.8335 39.1666 17.5002V19.1668C39.1666 19.1668 39.1666 20.8335 37.4999 20.8335H2.49992C2.49992 20.8335 0.833252 20.8335 0.833252 19.1668V17.5002C0.833252 17.5002 0.833252 15.8335 2.49992 15.8335Z", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M5.83325 12.5L15.8333 2.5", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M34.1667 12.5L24.1667 2.5", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M22.5 24.1665V32.4998", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M29.1667 24.1665V32.4998", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M17.5 24.1665V32.4998", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M10.8333 24.1665V32.4998", strokeWidth: "1.66667", strokeLinecap: "round", strokeLinejoin: "round" })] }) }));
        default:
            return jsx("p", { children: "x" });
    }
};

const Switch = styled(Switch$1, {
    shouldForwardProp: (prop) => prop !== 'switchSize',
})(({ theme, switchSize }) => {
    const sizes = {
        small: {
            width: 28,
            height: 16,
            thumbWidth: 12,
            thumbHeight: 12,
            thumbBorderRadius: 6,
            switchBasePadding: 2,
            switchBaseTransform: 12,
            activeTransform: 9,
        },
        medium: {
            width: 36,
            height: 20,
            thumbWidth: 16,
            thumbHeight: 16,
            thumbBorderRadius: 8,
            switchBasePadding: 3,
            switchBaseTransform: 16,
            activeTransform: 12,
        },
        large: {
            width: 48,
            height: 24,
            thumbWidth: 18,
            thumbHeight: 18,
            thumbBorderRadius: 10,
            switchBasePadding: 3,
            switchBaseTransform: 23,
            activeTransform: 16,
        },
    };
    const { width, height, thumbWidth, thumbHeight, thumbBorderRadius, switchBasePadding, switchBaseTransform, activeTransform, } = sizes[switchSize];
    return {
        width,
        height,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: thumbWidth + 3,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: `translateX(${activeTransform}px)`,
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: switchBasePadding,
            '&.Mui-checked': {
                transform: `translateX(${switchBaseTransform}px)`,
                color: theme.palette.defaultColors.white,
                '&.Mui-disabled': {
                    color: theme.palette.defaultColors.white,
                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.uiBlue[400],
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    backgroundColor: theme.palette.uiBlue[100],
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: `0 2px 4px 0 ${hexToRgba(theme.palette.defaultColors.black, 25)}`,
            width: thumbWidth,
            height: thumbHeight,
            borderRadius: thumbBorderRadius,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: height / 2,
            opacity: 1,
            backgroundColor: hexToRgba(theme.palette.defaultColors.black, 25),
            boxSizing: 'border-box',
        },
    };
});

const fontWeightMapping$1 = {
    regular: 400,
    medium: 600,
    semiBold: 700,
    bold: 800,
};
const TypographyRoot = styled$1(MuiTypography, {
    shouldForwardProp: (prop) => {
        return prop !== 'weight';
    },
}) `
  font-weight: ${({ weight }) => weight ? fontWeightMapping$1[weight] : 'inherit'};
`;
const Typography = forwardRef(({ children, weight = 'regular', component, ...otherProps }, ref) => (jsx(TypographyRoot, { component: component, weight: weight, ref: ref, ...otherProps, children: children })));

const CardStyled = styled(Box)(({ theme }) => ({
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.common.white,
    textAlign: 'left',
}));
const BaseCard = forwardRef(({ children, ...rest }, ref) => (jsx(CardStyled, { ref: ref, ...rest, children: children })));
BaseCard.Header = BaseCardHeader;
BaseCard.Body = BaseCardBody;
BaseCard.Footer = BaseCardFooter;

const GenericModal = ({ tag, title, leftPaneIcon, children, open, onClose, onExited, width = 688, }) => {
    const { palette } = useTheme();
    return (jsx(Dialog, { closeAfterTransition: false, onClose: onClose, open: open, maxWidth: "md", TransitionProps: {
            onExited: onExited,
        }, PaperProps: {
            sx: {
                bgcolor: palette.uiCoolGray[50],
                borderRadius: '8px',
                width: `${width}px`,
            },
        }, children: jsxs(Stack, { sx: {
                padding: leftPaneIcon ? '24px 32px 32px 24px' : '24px 32px 32px 32px',
                flexDirection: 'row',
                gap: '16px',
            }, children: [leftPaneIcon && jsx(Box, { flexShrink: 0, children: leftPaneIcon }), jsxs(Stack, { sx: { gap: '8px', flexGrow: 1 }, children: [jsxs(Box, { children: [tag && (jsx(Typography, { variant: "b3", weight: "semiBold", sx: { color: palette.collageRaspberry[500] }, children: tag })), jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [jsx(Typography, { variant: "h2", weight: "semiBold", children: title.text }), title.endIcon] })] }), jsx(IconButton, { "aria-label": "close", "data-testid": "close", onClick: onClose, sx: {
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: hexToRgba(palette.uiGray[800], 65),
                                '&:hover': { color: palette.uiGray[800], background: 'none' },
                            }, children: jsx(XIcon, { size: 32 }) }), jsx(Box, { children: children })] })] }) }));
};

/**
 * Generates CSS styles for the tooltip arrow based on its color and position.
 * @param arrowColor - The color of the tooltip arrow.
 * @param position - The position of the arrow relative to the tooltip.
 * @returns An object containing CSS styles for the tooltip arrow.
 */
const getArrowStyles = (arrowColor, position) => {
    const common = {
        content: '""',
        position: 'absolute',
        borderWidth: '5px',
        borderStyle: 'solid',
    };
    switch (position) {
        case 'top':
            return {
                ...common,
                bottom: '100%',
                left: '50%',
                marginLeft: '-5px',
                borderColor: `transparent transparent ${arrowColor} transparent`,
            };
        case 'bottom':
            return {
                ...common,
                top: '100%',
                left: '50%',
                marginLeft: '-5px',
                borderColor: `${arrowColor} transparent transparent transparent`,
            };
        case 'left':
            return {
                ...common,
                right: '100%',
                top: '50%',
                marginTop: '-5px',
                borderColor: `transparent ${arrowColor} transparent transparent`,
            };
        case 'right':
            return {
                ...common,
                top: '50%',
                left: '100%',
                marginTop: '-5px',
                borderColor: `transparent transparent transparent ${arrowColor}`,
            };
        default:
            return {};
    }
};
/**
 * Generates CSS styles for positioning the tooltip based on its position.
 * @param position - The position of the tooltip.
 * @returns An object containing CSS styles for the tooltip position.
 */
const getTooltipPositionStyles = (position) => {
    const styles = {};
    if (position === 'top-start') {
        return {
            transform: `translate(-100%, -100%)`,
        };
    }
    if (position === 'top') {
        return {
            transform: `translate(-50%, -100%)`,
        };
    }
    if (position === 'top-end') {
        return {
            transform: `translate(0%, -100%)`,
        };
    }
    if (position === 'right') {
        return {
            transform: `translate(0%, -50%)`,
        };
    }
    if (position === 'bottom-end') {
        return {};
    }
    if (position === 'bottom') {
        return {
            transform: `translate(-50%, 0%)`,
        };
    }
    if (position === 'bottom-start') {
        return {
            transform: `translate(-100%, 0%)`,
        };
    }
    if (position === 'left') {
        return {
            transform: `translate(-100%, -50%)`,
        };
    }
    return styles;
};
/**
 * Returns the opposite tooltip and arrow position names.
 * @param tooltipPosition - The current position of the tooltip.
 * @param arrowPosition - The current position of the arrow.
 * @returns An object containing the inversed tooltip and arrow position names.
 */
const getInversePosition = (tooltipPosition, arrowPosition) => {
    const inverseArrow = arrowPosition === 'left'
        ? 'right'
        : arrowPosition === 'right'
            ? 'left'
            : arrowPosition;
    let inverseTooltipPosition = tooltipPosition;
    switch (tooltipPosition) {
        case 'top-start':
            inverseTooltipPosition = 'top-end';
            break;
        case 'left':
            inverseTooltipPosition = 'right';
            break;
        case 'bottom-start':
            inverseTooltipPosition = 'bottom-end';
            break;
        case 'top-end':
            inverseTooltipPosition = 'top-start';
            break;
        case 'right':
            inverseTooltipPosition = 'left';
            break;
        case 'bottom-end':
            inverseTooltipPosition = 'bottom-start';
            break;
    }
    return { container: inverseTooltipPosition, arrow: inverseArrow };
};

const fontWeightMapping = {
    regular: 400,
    medium: 600,
    semiBold: 700,
    bold: 800,
};
const StyledGraphTooltip = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'arrowPosition',
})(({ theme: { palette, zIndex }, arrowPosition }) => ({
    display: 'flex',
    position: 'absolute',
    backgroundColor: palette.uiCoolGray[900],
    padding: '6px 8px',
    color: palette.common.white,
    fontSize: '12px',
    borderRadius: '2px',
    zIndex: zIndex.tooltip,
    textWrap: 'nowrap',
    '&:after': getArrowStyles(palette.uiCoolGray[900], arrowPosition),
    pointerEvents: 'none',
}));
const Label = styled((props) => (jsx(Typography, { variant: "b3", ...props })), {
    shouldForwardProp: (propName) => propName !== 'isSingleItem',
})(({ isSingleItem, theme }) => ({
    color: isSingleItem
        ? theme.palette.common.white
        : hexToRgba(theme.palette.defaultColors.white, 80),
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: isSingleItem
        ? fontWeightMapping.medium
        : fontWeightMapping.regular,
}));
const Value = styled((props) => (jsx(Typography, { variant: "b2", ...props })))(({ theme }) => ({
    color: theme.palette.common.white,
}));
const UnitMeasurement = styled((props) => (jsx(Typography, { ...props, variant: "b3", component: "span" })))({
    display: 'inline-block',
});

const arrowOffset = 8;
const GraphTooltip = ({ disablePortal = false, offsetLeft = 0, offsetTop = 0, position = 'bottom-end', arrowPosition = 'top', valueAdornments, left = 0, top = 0, rows, open, sx, }) => {
    const [tooltipRef, setTooltipRef] = useState(null);
    let [adjustedPosition, adjustedArrowPosition] = [position, arrowPosition];
    const [shouldInvertPosition, setShouldInvertPosition] = useState(false);
    useEffect(() => {
        if (tooltipRef) {
            const { offsetLeft, offsetWidth } = tooltipRef;
            if (offsetLeft + offsetWidth > document.body.clientWidth &&
                (position === 'top-end' ||
                    position === 'right' ||
                    position === 'bottom-end')) {
                return setShouldInvertPosition(true);
            }
            setShouldInvertPosition(false);
        }
    }, [tooltipRef, position]);
    if (!open)
        return null;
    if (shouldInvertPosition) {
        const inversedPositions = getInversePosition(position, arrowPosition);
        adjustedPosition = inversedPositions.container;
        adjustedArrowPosition = inversedPositions.arrow;
    }
    const defaultOffsetX = adjustedArrowPosition === 'left'
        ? arrowOffset
        : adjustedArrowPosition === 'right'
            ? -arrowOffset
            : 0;
    const defaultOffsetY = adjustedArrowPosition === 'top'
        ? arrowOffset
        : adjustedArrowPosition === 'bottom'
            ? -arrowOffset
            : 0;
    const leftPos = shouldInvertPosition
        ? left - offsetLeft + defaultOffsetX
        : left + offsetLeft + defaultOffsetX;
    const topPos = shouldInvertPosition
        ? top - offsetTop + defaultOffsetY
        : top + offsetTop + defaultOffsetY;
    const positionStyles = getTooltipPositionStyles(adjustedPosition);
    return (jsx(Portal, { disablePortal: disablePortal, children: jsx(StyledGraphTooltip, { ref: setTooltipRef, sx: {
                ...positionStyles,
                left: leftPos,
                top: topPos,
                ...sx,
            }, arrowPosition: adjustedArrowPosition, children: jsx(Stack, { sx: {
                    gap: '4px',
                }, children: rows.map((row, index) => (jsxs(Stack, { sx: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '4px',
                    }, children: [jsx(Label, { isSingleItem: !row.value, children: row.label && row.label.length > 20
                                ? row.label.slice(0, 20) + '…'
                                : row.label }), row.value && (jsxs(Value, { children: [valueAdornments && valueAdornments.prefix && (jsx(UnitMeasurement, { children: valueAdornments.prefix })), row.value, valueAdornments && valueAdornments.suffix && (jsx(UnitMeasurement, { children: valueAdornments.suffix }))] }))] }, `tooltip-row-${index}`))) }) }) }));
};

const PrimaryCard = ({ id, title, description, children, cardActions, customStyles, footer, }) => {
    return (jsxs(BaseCard, { id: id, sx: { flex: 1, ...customStyles?.container }, children: [jsxs(BaseCard.Header, { sx: { minHeight: '48px', ...customStyles?.header }, children: [jsxs(Stack, { children: [jsx(Typography, { variant: "h3", weight: "medium", children: title }), description && (jsx(Typography, { variant: "b2", sx: (theme) => ({
                                    color: theme.palette.uiGray[500],
                                    paddingTop: '4px',
                                }), children: description }))] }), jsx(Stack, { direction: "row", gap: '16px', flexShrink: 0, children: cardActions?.map((action, index) => (jsx(Fragment, { children: action }, index))) })] }), jsx(BaseCard.Body, { sx: customStyles?.body, children: children }), footer && (jsx(BaseCard.Footer, { sx: customStyles?.footer, children: footer }))] }));
};

const CustomSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.uiBlue[200],
    borderRadius: 0,
    padding: '8px 0 !important',
    height: '8px',
    '& .MuiSlider-thumb': {
        backgroundColor: theme.palette.uiBlue[500],
        width: '16px',
        height: '16px',
        '&:hover, &.Mui-focusVisible, &.Mui-active': {
            boxShadow: `0px 0px 0px 8px ${hexToRgba(theme.palette.uiBlue[100] ?? '#000', 40)}`,
        },
    },
    '& .MuiSlider-rail': {
        color: theme.palette.uiCoolGray[100],
        opacity: 1,
    },
    '.MuiSlider-mark': { display: 'none' },
    '.MuiSlider-markLabel': { fontSize: '10px', top: '26px !important' },
}));
const RangeSlider = ({ min, max, values, setValues, showNumberInputs = true, }) => {
    const { palette } = useTheme();
    const handleLowerValueChange = (newValue) => {
        const upperValue = values[1];
        const lowerValue = Math.max(min, Math.min(newValue, upperValue));
        setValues([lowerValue, upperValue]);
    };
    const handleUpperValueChange = (newValue) => {
        const lowerValue = values[0];
        const upperValue = Math.min(Math.max(newValue, lowerValue), max);
        setValues([lowerValue, upperValue]);
    };
    return (jsxs(Box, { sx: { paddingLeft: '32px' }, children: [jsx(CustomSlider, { value: values, onChange: (_, newValue) => setValues(newValue), valueLabelDisplay: "auto", min: min, max: max, defaultValue: [min, max], marks: [
                    {
                        value: min,
                        label: min.toString(),
                    },
                    {
                        value: max,
                        label: max.toString(),
                    },
                ] }), showNumberInputs && (jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: '15px' }, children: [jsx(NumberInput, { value: values[0], setValue: handleLowerValueChange, min: min, max: values[1] }), jsx(Typography$1, { color: palette.uiCoolGray[300], variant: "b1", children: "-" }), jsx(NumberInput, { value: values[1], setValue: handleUpperValueChange, min: values[0], max: max })] }))] }));
};

const SecondaryCard = ({ id, isLoading, title, cardActions, children, customStyles, }) => {
    let header = null;
    if (isLoading) {
        header = jsx(Skeleton, { variant: "rectangular", width: '190px', height: '30px' });
    }
    else if (title) {
        header = (jsxs(Fragment$1, { children: [jsxs(Box, { sx: { display: 'flex', gap: '4px' }, children: [jsx(Typography, { variant: "b1", weight: "medium", children: title.text }), title.endIcon] }), cardActions && (jsx(Box, { sx: {
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '8px',
                    }, children: cardActions }))] }));
    }
    return (jsxs(BaseCard, { id: id, sx: { gap: '4px', ...customStyles?.container }, children: [jsx(BaseCard.Header, { hideSeparator: true, sx: { paddingBottom: 0, ...customStyles?.header }, children: header }), jsx(BaseCard.Body, { sx: { paddingTop: 0, ...customStyles?.body }, children: children })] }));
};

var SnackbarType;
(function (SnackbarType) {
    SnackbarType["Default"] = "default";
    SnackbarType["Info"] = "info";
    SnackbarType["Success"] = "success";
    SnackbarType["Alert"] = "alert";
    SnackbarType["Warning"] = "warning";
    SnackbarType["Loading"] = "loading";
})(SnackbarType || (SnackbarType = {}));
const mapTypeToSeverity = (type) => {
    switch (type) {
        case SnackbarType.Default:
            return 'info';
        case SnackbarType.Info:
            return 'info';
        case SnackbarType.Success:
            return 'success';
        case SnackbarType.Alert:
            return 'error';
        case SnackbarType.Warning:
            return 'warning';
        case SnackbarType.Loading:
            return 'info';
        default:
            return 'info';
    }
};
const setStyles = (palette, type, customIcon) => {
    let fontColor = palette.common.white;
    let icon = null;
    if (type === SnackbarType.Warning) {
        fontColor = palette.uiGray[800];
    }
    if (customIcon)
        icon = customIcon;
    if (type === SnackbarType.Loading)
        icon = (jsx(CircularProgress, { size: 20, sx: { color: fontColor, margin: '0px 4px 0px 8px' } }));
    if (type === SnackbarType.Default && !customIcon) {
        icon = false;
    }
    return { fontColor, icon };
};
function Snackbar({ id, type, message, customStyles, customIcon, showClose = false, actionButton, onClose, }) {
    const { palette } = useTheme$1();
    const severity = mapTypeToSeverity(type);
    const { fontColor, icon } = setStyles(palette, type, customIcon);
    return (jsx(Box, { id: id, sx: { display: 'flex', maxWidth: 800, ...customStyles?.snackbar }, children: jsx(Alert, { severity: severity, icon: icon, variant: "filled", sx: {
                borderColor: '10px solid blue',
                display: 'flex',
                padding: '4px 12px 4px 8px',
                alignItems: 'center',
                '.MuiAlert-action': {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px 0',
                    margin: 0,
                    marginLeft: '24px',
                },
                '.MuiAlert-icon': {
                    marginRight: '8px',
                },
                '&.MuiAlert-colorSuccess': {
                    backgroundColor: palette.uiGreen['600'],
                },
                '&.MuiAlert-colorInfo': {
                    backgroundColor: type === SnackbarType.Info
                        ? palette.uiBlue[600]
                        : palette.uiCoolGray[900],
                },
                '&.MuiAlert-colorError': {
                    backgroundColor: palette.uiRed[600],
                },
                '&.MuiAlert-colorWarning': {
                    backgroundColor: palette.uiYellow[400],
                },
                ...customStyles?.alert,
            }, action: jsxs(Fragment$1, { children: [actionButton && (jsx(Button$1, { sx: {
                            color: fontColor,
                            padding: 0,
                            ...customStyles?.button,
                        }, onClick: actionButton.onClick, children: jsx(Typography, { variant: "b2", weight: "medium", children: actionButton.label }) })), showClose && (jsx(IconButton, { onClick: onClose, size: "small", children: jsx(XIcon, { weight: "bold", size: 16, color: fontColor }) }))] }), children: jsx(Typography, { children: message }) }) }));
}

const ui = {
    blue: {
        50: '#e7f0f6',
        100: '#b3d1e3',
        200: '#8ebad5',
        300: '#5b9bc2',
        400: '#3b87b6',
        500: '#0a69a4',
        600: '#096095',
        700: '#074b74',
        800: '#063a5a',
        900: '#042c45',
    },
    green: {
        50: '#e8f4ed',
        100: '#b7ddc8',
        200: '#95ccad',
        300: '#64b587',
        400: '#46a770',
        500: '#18914c',
        600: '#168445',
        700: '#116736',
        800: '#0d502a',
        900: '#0a3d20',
    },
    yellow: {
        50: '#fdf5eb',
        100: '#f8e1c0',
        200: '#f5d2a2',
        300: '#f1be77',
        400: '#eeb15d',
        500: '#ea9e34',
        600: '#d5902f',
        700: '#a67025',
        800: '#81571d',
        900: '#624216',
    },
    red: {
        50: '#faebeb',
        100: '#efc0c0',
        200: '#e8a1a1',
        300: '#dd7676',
        400: '#d65c5c',
        500: '#cc3333',
        600: '#ba2e2e',
        700: '#912424',
        800: '#701c1c',
        900: '#561515',
    },
    gray: {
        50: '#efefef',
        100: '#cccccc',
        200: '#b4b4b4',
        300: '#929292',
        400: '#7d7d7d',
        500: '#5c5c5c',
        600: '#545454',
        700: '#414141',
        800: '#333333',
        900: '#272727',
    },
    coolGray: {
        50: '#f2f3f5',
        100: '#d7dbe0',
        200: '#c4cad1',
        300: '#a9b1bb',
        400: '#98a2ae',
        500: '#7e8b9a',
        600: '#737e8c',
        700: '#59636d',
        800: '#454c55',
        900: '#353a41',
    },
};

const collage = {
    raspberry: {
        50: '#FEECF5',
        100: '#FBCBE5',
        200: '#F1A7CF',
        300: '#E27EB5',
        400: '#CB5294',
        500: '#a02869',
        600: '#922460',
        700: '#721c4b',
        800: '#58163a',
        900: '#43112c',
    },
    teal: {
        50: '#edf9fa',
        100: '#c7ebee',
        200: '#abe2e6',
        300: '#85d5da',
        400: '#6dcdd3',
        500: '#49c0c8',
        600: '#42afb6',
        700: '#34888e',
        800: '#286a6e',
        900: '#1f5154',
    },
    citron: {
        50: '#fbfaec',
        100: '#f3eec5',
        200: '#eee6a9',
        300: '#e6da81',
        400: '#e1d369',
        500: '#d9c843',
        600: '#c5b63d',
        700: '#9a8e30',
        800: '#776e25',
        900: '#5b541c',
    },
    navy: {
        50: '#EAEDF6',
        100: '#CCD4E6',
        200: '#A0AFCF',
        300: '#758BB8',
        400: '#536DA2',
        500: '#3C5486',
        600: '#2F4674',
        700: '#26385F',
        800: '#192848',
        900: '#0f1c36',
    },
};

const audience = {
    multiculturalYellow: {
        50: '#f9f5ed',
        100: '#ebe0c8',
        200: '#e2d1ae',
        300: '#d4bd89',
        400: '#ccb072',
        500: '#bf9c4f',
        600: '#ae8e48',
        700: '#886f38',
        800: '#69562b',
        900: '#504221',
    },
    generationsOrange: {
        50: '#faf0ed',
        100: '#efd2c8',
        200: '#e8bcae',
        300: '#dd9d89',
        400: '#d68a72',
        500: '#cc6d4f',
        600: '#ba6348',
        700: '#914d38',
        800: '#703c2b',
        900: '#562e21',
    },
    lgtbqPurple: {
        50: '#f4eff5',
        100: '#ddcce1',
        200: '#cdb3d3',
        300: '#b690bf',
        400: '#a87bb2',
        500: '#925a9f',
        600: '#855291',
        700: '#684071',
        800: '#503257',
        900: '#3d2643',
    },
    genderTeal: {
        50: '#ebf4f6',
        100: '#c0dee2',
        200: '#a1ced4',
        300: '#76b7c1',
        400: '#5ca9b5',
        500: '#3394a2',
        600: '#2e8793',
        700: '#246973',
        800: '#1c5159',
        900: '#153e44',
    },
    parentsAndKidsGreen: {
        50: '#edf3ef',
        100: '#c6dbcc',
        200: '#aacab4',
        300: '#83b191',
        400: '#6ba27c',
        500: '#468b5b',
        600: '#407e53',
        700: '#326341',
        800: '#274c32',
        900: '#1d3a26',
    },
    kidsGreen: {
        50: '#f5f7ec',
        100: '#e1e7c5',
        200: '#d2dba9',
        300: '#beca82',
        400: '#b1c06a',
        500: '#9eb045',
        600: '#90a03f',
        700: '#707d31',
        800: '#576126',
        900: '#424a1d',
    },
};

const themeColors = {
    primary: {
        main: '#954661',
        dark: '#7b1839',
        light: '#a7647a',
    },
    secondary: {
        main: '#c16f8b',
        dark: '#b14b6e',
        light: '#cb869e',
    },
    error: {
        main: '#CC3333',
        light: '#d65c5c',
        dark: '#ba2e2e',
    },
    warning: {
        main: '#d5902f',
        light: '#ea9e34',
        dark: '#a67025',
    },
    success: {
        main: '#18914c',
        light: '#46a770',
        dark: '#168445',
    },
    text: {
        primary: '#333333',
        secondary: '#5c5c5c',
        disabled: '#b4b4b4',
    },
};

const pxToRem = createTheme().typography.pxToRem;
const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
const generatePalette = (swatch, name) => {
    const palette = {};
    for (const color in swatch) {
        const colorKey = `${name}${capitalize(color)}`;
        palette[colorKey] = {
            ...swatch[color],
        };
    }
    // NOTE: ex. { 'uiYellow': { '50': '#fdf5eb', '100': '#f8e1c0' } }
    return palette;
};
const palette = {
    ...generatePalette(ui, 'ui'),
    ...generatePalette(collage, 'collage'),
    ...generatePalette(audience, 'audience'),
    ...themeColors,
    mode: 'light',
    background: {
        default: ui.coolGray[50],
    },
    defaultColors: {
        black: '#000000',
        white: '#ffffff',
    },
};
const themeOptions = {
    palette,
    typography: {
        allVariants: {
            fontFamily: "'Nunito Sans', 'Merriweather', sans-serif",
        },
        fontFamily: "'Nunito Sans', 'Merriweather', sans-serif",
        fontSize: 16,
        h4: undefined,
        h5: undefined,
        h6: undefined,
        subtitle1: undefined,
        subtitle2: undefined,
        body1: undefined,
        body2: undefined,
        button: undefined,
        overline: undefined,
        h1: {
            fontSize: pxToRem(28),
            lineHeight: pxToRem(38),
        },
        h2: {
            fontSize: pxToRem(24),
            lineHeight: pxToRem(33),
        },
        h3: {
            fontSize: pxToRem(20),
            lineHeight: pxToRem(27),
        },
        b1: {
            fontSize: pxToRem(16),
            lineHeight: pxToRem(22),
        },
        b2: {
            fontSize: pxToRem(14),
            lineHeight: pxToRem(19),
        },
        b3: {
            fontSize: pxToRem(12),
            lineHeight: pxToRem(16),
        },
        caption: {
            fontSize: pxToRem(10),
            lineHeight: pxToRem(20),
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: 'unset',
                },
            },
            defaultProps: {
                fontFamily: "'Nunito Sans', 'Merriweather', sans-serif",
                // NOTE: by default, new variants will render as span
                variantMapping: {
                    b1: 'p',
                    b2: 'p',
                    b3: 'p',
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    fontFamily: "'Nunito Sans', 'Merriweather', sans-serif",
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    fontFamily: "'Nunito Sans', sans-serif",
                },
                body: {
                    fontFamily: "'Nunito Sans', sans-serif",
                },
                'svg text': {
                    fontFamily: "'Nunito Sans', sans-serif",
                },
            },
        },
        MuiAlert: {
            defaultProps: {
                iconMapping: {
                    info: jsx(InfoIcon, { size: 24 }),
                    success: jsx(CheckIcon, { size: 24 }),
                    warning: jsx(WarningIcon, { size: 24 }),
                    error: jsx(WarningOctagonIcon, { size: 24 }),
                },
            },
            styleOverrides: {
                root: {
                    '&.MuiAlert-standardWarning': {
                        border: `1px solid ${ui.yellow[500]}`,
                    },
                    '&.MuiAlert-standardError': {
                        border: `1px solid ${ui.red[400]}`,
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: ui.coolGray[200],
                        transition: 'all 0.3s ease',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: `1px solid ${ui.blue[400]}`,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: `1px solid ${ui.blue[400]}`,
                        boxShadow: `0 0 4px 0 ${ui.blue[400]}`,
                    },
                },
            },
        },
    },
    breakpoints: {
        values: {
            // NOTE: xs and sm are the default MUI values. md, lg, and xl are customized.
            xs: 0,
            sm: 600,
            md: 800,
            lg: 1280,
            xl: 1950,
        },
    },
};
const theme = createTheme(themeOptions);

export { BaseCard, BaseCardBody, BaseCardFooter, BaseCardHeader, Breadcrumbs, Button, CustomCheckbox, CustomRadio, CustomSelect, CustomTooltip, GenericModal, GraphTooltip, NumberInput, Page, PaletteColors, PrimaryCard, RangeSlider, Row, SearchBox, SecondaryCard, Skeleton, Snackbar, SnackbarType, StreamlineIcon, StreamlineIcons, Switch, Typography, audience, collage, hexToRgba, palette, theme, themeColors, ui };
//# sourceMappingURL=index.js.map
