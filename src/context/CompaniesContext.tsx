import {createContext, ReactNode, useState} from "react";
import { Company, CompanyContextType } from "../types/Company";

const CompanyContext = createContext({} as CompanyContextType);

interface Props {
    children: ReactNode
}

export function CompaniesContextProvider({children}: Props) {
    const [companies, setCompanies] = useState<Array<Company>>([]);

    const handle = (value: Array<Company>) => {
        setCompanies(value);
    };

    return (
        <CompanyContext.Provider value={{CompaniesContext: companies, SetCompaniesContext: handle}}>
            {children}    
        </CompanyContext.Provider>
    )
}



export default CompanyContext