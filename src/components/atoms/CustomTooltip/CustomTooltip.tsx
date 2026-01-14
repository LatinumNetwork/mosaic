import {
  Theme,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
} from '@mui/material';

export interface CustomTooltipProps extends TooltipProps {}

const StyledTooltip = styled(
  ({ children, className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }}>
      {children}
    </Tooltip>
  )
)(
  ({
    theme: {
      palette: { uiCoolGray, common },
    },
  }: {
    theme: Theme;
    maxWidth?: string | number;
  }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: uiCoolGray[900],
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: uiCoolGray[900],
      boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.15)',
      color: common.white,
      padding: '6px',
    },
  })
);

const CustomTooltip = (props: TooltipProps) => {
  return <StyledTooltip {...props} />;
};

export { CustomTooltip };
