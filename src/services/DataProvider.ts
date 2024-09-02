import { useContext } from "react";
import { CompanyContextType } from "../types/Company";
import CompanyContext from "../context/CompaniesContext";



export async function LoadAllCompanies() {
    const {Companies: CompaniesContext, setCompaniesContext} = useContext(
        CompanyContext
    ) as CompanyContextType;    

    try {
        
    } catch (error) {
        
    }
}