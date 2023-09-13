import { SxProps, Theme, styled } from '@mui/material';

import companyLogos from './companyLogos';

type CompanyLogoName = keyof typeof companyLogos;

export type CompanyLogoProps = {
  name: CompanyLogoName;
  width: number;
  height: number;
  className?: string; // Made it optional
  sx?: SxProps<Theme>;
};

const StyledImg = styled('img')({}); // You can add default styles here if needed

export const CompanyLogo = ({
  name,
  width,
  height,
  className,
}: CompanyLogoProps) => (
  <StyledImg
    className={className}
    width={width}
    height={height}
    src={companyLogos[name].src}
    alt={companyLogos[name].alt}
  />
);
