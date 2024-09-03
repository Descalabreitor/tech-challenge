import { createContext, ReactNode, useState } from "react";
import { Company, CompanyContextType } from "../types/Company";

const CompanyContext = createContext({} as CompanyContextType);

interface Props {
  children: ReactNode;
}

export function CompaniesContextProvider({ children }: Props) {
  const [Companies, SetCompanies] = useState<Array<Company>>([]);

  return (
    <CompanyContext.Provider value={{ Companies, SetCompanies }}>
      {children}
    </CompanyContext.Provider>
  );
}

export default CompanyContext;
