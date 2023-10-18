import MuiBreadcrumbs, {
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material/Breadcrumbs';
import { CaretRight } from '@phosphor-icons/react';

export const Breadcrumbs = ({ children, ...props }: MuiBreadcrumbsProps) => (
  <MuiBreadcrumbs separator={<CaretRight size={20} />} {...props}>
    {children}
  </MuiBreadcrumbs>
);
