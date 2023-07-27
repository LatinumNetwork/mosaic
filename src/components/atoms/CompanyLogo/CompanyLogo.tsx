import companyLogos from './companyLogos';

type CompanyLogoName = keyof typeof companyLogos;

export type CompanyLogoProps = {
  name: CompanyLogoName;
  width: number;
  height: number;
};

export const CompanyLogo = ({ name, width, height }: CompanyLogoProps) => (
  <img
    width={width}
    height={height}
    src={companyLogos[name].src}
    alt={companyLogos[name].alt}
  />
);
