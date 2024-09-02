import React, { useContext, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getAllCompanies } from '../services/companiesApi';
import CompanyContext from '../context/CompaniesContext';

const CompanyTable: React.FC = () => {
    const { Companies, SetCompanies} = useContext(CompanyContext);

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const data = await getAllCompanies();
                SetCompanies(data);
            } catch (error) {
                console.error("Error fetching companies", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, [SetCompanies]);

    return (
        <div>
            <ul>
                <h3>Companies</h3>
                <DataTable value={Companies} loading={loading} paginator rows={10}>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="location" header="Location" sortable></Column>
                    <Column field="business_area" header="Business Area" sortable></Column>
                    <Column field="company_size" header="Company Size" sortable></Column>
                </DataTable>
            </ul>
        </div>
    );
};

export default CompanyTable;
