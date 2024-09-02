import React, { useContext, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getAllCompanies } from '../services/companiesApi';
import CompanyContext from '../context/CompaniesContext';

const CompanyTable: React.FC = () => {
    const context = useContext(CompanyContext)
    console.log(context)
    const { CompaniesContext, SetCompaniesContext } = useContext(CompanyContext);

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const data = await getAllCompanies();
                console.log(CompanyContext)
                SetCompaniesContext(data);
            } catch (error) {
                console.error("Error fetching companies", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, [SetCompaniesContext]);

    return (
        <div>
            <h3>Companies List</h3>
            <DataTable value={CompaniesContext} loading={loading} paginator rows={10} responsiveLayout="scroll">
                <Column field="id" header="ID" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="location" header="Location" sortable></Column>
                <Column field="business_area" header="Business Area" sortable></Column>
                <Column field="company_size" header="Company Size" sortable></Column>
            </DataTable>
        </div>
    );
};

export default CompanyTable;
