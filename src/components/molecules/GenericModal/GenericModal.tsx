import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
} from '@mui/material';
import { X } from '@phosphor-icons/react';
import React from 'react';
import { Typography } from 'src/components';

export interface GenericModalProps {
  tag?: string;
  title: { text: string; endIcon?: React.ReactNode };
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  onExited?: () => void;
  width?: number;
}

export const GenericModal = ({
  tag,
  title,
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
      <DialogTitle
        sx={{
          color: palette.uiGray[800],
          padding: '24px 32px 8px',
        }}
        component="div"
      >
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
        <IconButton
          aria-label="close"
          data-testid="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: palette.uiGray[800],
          }}
        >
          <X color={palette.uiGray[800]} opacity={0.8} size={32} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: '32px' }}>{children}</DialogContent>
    </Dialog>
  );
};
