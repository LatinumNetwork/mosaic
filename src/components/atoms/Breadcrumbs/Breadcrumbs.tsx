import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MuiBreadcrumbs, {
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material/Breadcrumbs';

export type BreadcrumbsProps = MuiBreadcrumbsProps;

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  ...props
}) => (
  <MuiBreadcrumbs separator={<NavigateNextIcon fontSize="small" />} {...props}>
    {children}
  </MuiBreadcrumbs>
);
