import MuiBreadcrumbs, {
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material/Breadcrumbs';
import { CaretRight } from '@phosphor-icons/react';

export type BreadcrumbsProps = MuiBreadcrumbsProps;

export const Breadcrumbs = ({ children, ...props }: BreadcrumbsProps) => (
  <MuiBreadcrumbs separator={<CaretRight size={20} />} {...props}>
    {children}
  </MuiBreadcrumbs>
);
