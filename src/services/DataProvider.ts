import { useContext } from "react";
import { CompanyContextType } from "../types/Company";
import CompanyContext from "../context/CompaniesContext";



export async function LoadAllCompanies() {
    const {CompaniesContext, setCompaniesContext} = useContext(
        CompanyContext
    ) as CompanyContextType;    

    try {
        
    } catch (error) {
        
    }
}