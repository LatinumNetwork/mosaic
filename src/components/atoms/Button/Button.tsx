import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { PaletteColors } from 'src/typings';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'text' | 'link' | 'nav';
type MuiVariant = MuiButtonProps['variant'];
type OmitMuiButtonWrapperProps = Omit<MuiButtonProps, 'color' | 'variant'>;
type MainColor = keyof typeof PaletteColors;

export interface ButtonWrapperProps extends OmitMuiButtonWrapperProps {
  variant?: Variant;
  color?: PaletteColors;
}
export interface ButtonProps extends MuiButtonProps {
  customVariant?: Variant;
  customColor?: PaletteColors;
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
      return PaletteColors.collageRed;
    case 'tertiary':
    case 'text':
    case 'nav':
      return PaletteColors.uiGray;
    case 'link':
      return PaletteColors.uiBlue;
    default:
      return PaletteColors.collageRed;
  }
};

const ButtonRoot = styled(MuiButton)<ButtonProps>(
  ({ theme, customVariant, size, customColor }) => {
    const mainColor: MainColor = customColor ?? getDefaultColor(customVariant);

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

      ...(customVariant === 'primary' && {
        color: theme.palette.uiWhite[500],
        backgroundColor: theme.palette[mainColor][400],
        height: '40px',
        '&:hover': {
          backgroundColor: theme.palette[mainColor][500],
        },
      }),
      ...(customVariant === 'secondary' && {
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
      ...(customVariant === 'tertiary' && {
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
      ...(customVariant === 'text' && {
        padding: '2px 4px',
        color: theme.palette[mainColor][800],
        '&:hover': {
          background: 'none',
          border: 'none',
          color: theme.palette.collageRed[600],
        },
      }),
      ...(customVariant === 'link' && {
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
      ...(customVariant === 'nav' && {
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

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  // color is a prop we want to use for our own colors but MUI won't recognize them, so I destruct-ed it out.
  color,
  ...props
}: ButtonWrapperProps) {
  const muiVariant = mapVariantToMui(variant);

  return (
    <ButtonRoot
      variant={muiVariant}
      customVariant={variant}
      customColor={color}
      size={size}
      {...props}
    >
      {children}
    </ButtonRoot>
  );
}

export default Button;
