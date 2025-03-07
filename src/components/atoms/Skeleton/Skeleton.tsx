import { Box, SxProps, Theme, styled } from '@mui/material';

export interface SkeletonProps {
  variant: 'circular' | 'rectangular';
  sx?: SxProps<Theme>;
  height: string;
  width: string;
}

const Wrapper = styled(Box)<SkeletonProps>(
  ({ theme: { palette }, variant }) => ({
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
  })
);

export const Skeleton = ({ sx, variant, width, height }: SkeletonProps) => {
  return <Wrapper sx={sx} width={width} height={height} variant={variant} />;
};
