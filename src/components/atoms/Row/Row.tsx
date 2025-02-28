import { Box, BoxProps, styled } from '@mui/material';

export type RowProps = BoxProps;

export const Row = styled(Box)<RowProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 32px;
  gap: 32px;
  flex-wrap: wrap;
`;
