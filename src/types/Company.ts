export interface Company {
    id: number,
    name: string,
    location: string,
    business_area: string,
    company_size: 'small' | 'medium' | 'large',
};

export type CompanyContextType = {
    CompaniesContext: Array<Company>;
    SetCompaniesContext: (value: Array<Company>) => void;
};
