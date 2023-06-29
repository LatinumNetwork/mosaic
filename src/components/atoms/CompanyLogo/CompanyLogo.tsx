import React from 'react';
import companyLogos from './companyLogos.json';

type CompanyLogoName = keyof typeof companyLogos;

type CompanyLogoProps = {
    name: CompanyLogoName;
    width: number;
    height: number;
};

const CompanyLogo = ({ name, width, height }: CompanyLogoProps) => (
    <img
        width={width}
        height={height}
        src={companyLogos[name].src}
        alt={companyLogos[name].alt}
    />
);

export default CompanyLogo;
