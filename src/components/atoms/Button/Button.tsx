import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React from 'react';
import { PaletteColors } from 'src/types';
import { hexToRgba } from 'src/utils';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'text' | 'link' | 'nav';
type MuiVariant = MuiButtonProps['variant'];
type OmitMuiButtonWrapperProps = Omit<MuiButtonProps, 'variant'>;
type MainColor = keyof typeof PaletteColors;

export interface ButtonWrapperProps extends OmitMuiButtonWrapperProps {
  variant?: Variant;
}

export interface ButtonProps extends MuiButtonProps {
  customVariant?: Variant;
}

const mapVariantToMui = (variant: Variant | undefined): MuiVariant => {
  switch (variant) {
    case 'primary':
    case 'secondary':
      return 'contained' as MuiVariant;
    case 'tertiary':
      return 'outlined' as MuiVariant;
    case 'text':
    case 'link':
    case 'nav':
      return 'text';
    default:
      return 'contained' as MuiVariant;
  }
};

const getDefaultColor = (variant: Variant | undefined) => {
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

const ButtonForwardRef = React.forwardRef(
  (
    { customVariant: _customVariant, ...props }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => <MuiButton ref={ref} {...props} />
);

const ButtonRoot = styled(ButtonForwardRef)<ButtonProps>(
  ({ theme, customVariant, size }) => {
    const mainColor: MainColor = getDefaultColor(customVariant);

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
  }
);

export const Button = React.forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      ...props
    }: ButtonWrapperProps,
    ref?: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const muiVariant = mapVariantToMui(variant);

    return (
      <ButtonRoot
        ref={ref}
        variant={muiVariant}
        customVariant={variant}
        size={size}
        {...props}
      >
        {children}
      </ButtonRoot>
    );
  }
);
