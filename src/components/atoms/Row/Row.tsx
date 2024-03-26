import { styled } from '@mui/material/styles';
import { Box, BoxProps as MosaicBoxProps } from 'src/components';

export type RowProps = MosaicBoxProps;

export const Row = styled(Box)<RowProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 32px;
  gap: 32px;
  flex-wrap: wrap;
`;
