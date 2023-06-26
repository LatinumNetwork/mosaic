import React from 'react';
import companyLogos from './companyLogos.json';

type CompanyLogoProps = {
    name: string;
    width: number;
    height: number;
};

const CompanyLogo = ({ name, width, height }: CompanyLogoProps) => (
    <img width={width} height={height} src={companyLogos[name]} />
);

export default CompanyLogo;
