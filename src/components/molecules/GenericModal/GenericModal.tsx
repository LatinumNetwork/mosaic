import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import { XIcon } from '@phosphor-icons/react';
import React from 'react';
import { Typography } from 'src/components';
import { hexToRgba } from 'src/index';

export interface GenericModalProps {
  tag?: string;
  title: { text: string; endIcon?: React.ReactNode };
  leftPaneIcon?: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  onExited?: () => void;
  width?: number;
}

export const GenericModal = ({
  tag,
  title,
  leftPaneIcon,
  children,
  open,
  onClose,
  onExited,
  width = 688,
}: GenericModalProps) => {
  const { palette } = useTheme();

  return (
    <Dialog
      closeAfterTransition={false}
      onClose={onClose}
      open={open}
      maxWidth="md"
      TransitionProps={{
        onExited: onExited,
      }}
      PaperProps={{
        sx: {
          bgcolor: palette.uiCoolGray[50],
          borderRadius: '8px',
          width: `${width}px`,
        },
      }}
    >
      <Stack
        sx={{
          padding: leftPaneIcon ? '24px 32px 32px 24px' : '24px 32px 32px 32px',
          flexDirection: 'row',
          gap: '16px',
        }}
      >
        {leftPaneIcon && <Box flexShrink={0}>{leftPaneIcon}</Box>}
        <Stack sx={{ gap: '8px', flexGrow: 1 }}>
          <Box>
            {tag && (
              <Typography
                variant="b3"
                weight="semiBold"
                sx={{ color: palette.collageRaspberry[500] }}
              >
                {tag}
              </Typography>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Typography variant="h2" weight="semiBold">
                {title.text}
              </Typography>
              {title.endIcon}
            </Box>
          </Box>
          <IconButton
            aria-label="close"
            data-testid="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: hexToRgba(palette.uiGray[800], 65),
              '&:hover': { color: palette.uiGray[800], background: 'none' },
            }}
          >
            <XIcon size={32} />
          </IconButton>
          <Box>{children}</Box>
        </Stack>
      </Stack>
    </Dialog>
  );
};
