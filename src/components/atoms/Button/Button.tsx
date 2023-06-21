import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import { PaletteColors } from 'src/types';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'text' | 'link' | 'nav';
export interface ButtonProps extends MuiButtonProps {
    variant?: Variant;
    color?: PaletteColors;
}

const getDefaultColor = (variant) => {
    switch (variant) {
        case 'primary':
        case 'secondary':
            return 'collageRed';
        case 'tertiary':
        case 'text':
        case 'nav':
            return 'uiGray';
        case 'link':
            return 'uiBlue';
        default:
            return 'collageRed';
    }
};

const ButtonRoot = styled(MuiButton)<ButtonProps>(
    ({ theme, variant, size, color }) => {
        let mainColor = color;
        if (!color) mainColor = getDefaultColor(variant);

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

            ...(variant === 'primary' && {
                color: theme.palette.uiWhite[500],
                backgroundColor: theme.palette[mainColor][400],
                height: '40px',
                '&:hover': {
                    backgroundColor: theme.palette[mainColor][500],
                },
            }),
            ...(variant === 'secondary' && {
                color: theme.palette[mainColor][500],
                border: '1px solid',
                borderColor: theme.palette[mainColor][200],
                backgroundColor: theme.palette.uiWhite[500],
                height: '40px',
                '&:hover': {
                    backgroundColor: theme.palette[mainColor][50],
                    borderColor: theme.palette[mainColor][500],
                },
            }),
            ...(variant === 'tertiary' && {
                color: theme.palette[mainColor][800],
                border: '1px solid',
                borderColor: theme.palette[mainColor][200],
                backgroundColor: theme.palette.uiWhite[500],
                height: '40px',
                '&:hover': {
                    backgroundColor: theme.palette.uiCoolGray[50],
                    borderColor: theme.palette[mainColor][500],
                },
            }),
            ...(variant === 'text' && {
                padding: '2px 4px',
                color: theme.palette[mainColor][800],
                '&:hover': {
                    background: 'none',
                    border: 'none',
                    color: theme.palette.collageRed[600],
                },
            }),
            ...(variant === 'link' && {
                color: theme.palette[mainColor][600],
                background: 'none',
                padding: '2px 4px',
                borderRadius: 0,
                minWidth: 0,
                '&:hover': {
                    ':after': {
                        content: '""',
                        background: theme.palette[mainColor][600],
                        position: 'absolute',
                        bottom: -2,
                        left: '0',
                        height: '1px',
                        width: '100%',
                    },
                    background: 'none',
                },
                '&:active': {
                    background: 'none',
                    border: 'none',
                    borderRadius: '4px',
                    ':after': {
                        content: '""',
                        background: 'none',
                    },
                },
            }),
            ...(variant === 'nav' && {
                color: theme.palette[mainColor][800],
                background: 'none',
                padding: '2px 4px',
                '&:hover': {
                    backgroundColor: theme.palette.uiCoolGray[50],
                },
                '&:active': {
                    color: theme.palette.collageRed[500],
                    backgroundColor: theme.palette.collageRed[50],
                },
            }),

            '&:disabled': {
                ...(variant === 'primary' && {
                    backgroundColor: theme.palette.uiCoolGray[100],
                    color: theme.palette.uiCoolGray[300],
                }),
                ...(variant === 'secondary' && {
                    border: '1px solid',
                    borderColor: theme.palette.uiCoolGray[100],
                    color: theme.palette.uiCoolGray[300],
                    backgroundColor: 'transparent',
                }),
                ...(variant === 'tertiary' && {
                    backgroundColor: 'transparent',
                    color: theme.palette.uiCoolGray[300],
                    border: 'none',
                }),
            },
        };
    }
);

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    ...props
}: ButtonProps) => {
    return (
        <ButtonRoot variant={variant} size={size} {...props}>
            {children}
        </ButtonRoot>
    );
};

export default Button;
