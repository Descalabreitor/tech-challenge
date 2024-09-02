import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getCompany } from '../services/companiesApi';
import { Company } from '../types/Company';

const CompanyTable: React.FC = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const data = await getCompany();
                setCompanies(data);
            } catch (error) {
                console.error("Error fetching companies", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    return (
        <ul>
            
            <h3>Company List</h3>
            <DataTable value={companies} loading={loading} paginator rows={10} responsiveLayout="scroll">
                <Column field="id" header="ID" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="location" header="Location" sortable></Column>
                <Column field="business_area" header="Business Area" sortable></Column>
                <Column field="company_size" header="Company Size" sortable></Column>
            </DataTable>
        </ul>
    );
};

export default CompanyTable