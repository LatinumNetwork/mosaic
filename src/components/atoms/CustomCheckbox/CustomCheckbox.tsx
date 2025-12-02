import { Checkbox, styled } from '@mui/material';
import { Icon } from 'src/index';

const StyledCheckbox = styled(Checkbox)(({ theme: { palette } }) => ({
  padding: '0',
  minWidth: '26px',
  '&.Mui-checked, &.MuiCheckbox-indeterminate': {
    color: palette.uiBlue[500],
  },
}));

export type CustomCheckboxProps = React.ComponentProps<typeof Checkbox>;

const CustomCheckbox: React.FC<CustomCheckboxProps> = (props) => (
  <StyledCheckbox
    icon={<Icon.SquareIcon size={24} />}
    checkedIcon={<Icon.CheckSquareIcon size={24} weight="fill" />}
    indeterminateIcon={<Icon.MinusSquareIcon size={24} weight="fill" />}
    {...props}
  />
);

export { CustomCheckbox };
