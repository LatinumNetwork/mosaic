import companyLogos from './companyLogos';
type CompanyLogoName = keyof typeof companyLogos;
export type CompanyLogoProps = {
    name: CompanyLogoName;
    width: number;
    height: number;
};
export declare const CompanyLogo: ({ name, width, height }: CompanyLogoProps) => import("react/jsx-runtime").JSX.Element;
export {};
