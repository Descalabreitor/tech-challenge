import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getAllUsers } from '../services/usersApi';
import { User } from '../types/User';
import { getAllCompanies } from '../services/companiesApi';

const CompanyTable: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const [userData, companyData] = await Promise.all([getAllUsers(), getAllCompanies()]);
                
                const companyMap = new Map<number, string>();
                companyData.forEach(company => {
                    companyMap.set(company.id, company.name);
                });
                // Mapear cada usuario para reemplazar companyId con el nombre de la compañía
                const usersWithCompanyNames = userData.map(user => ({
                    ...user,
                    company: companyMap.get(user.company_id) 
                }));

                setUsers(usersWithCompanyNames);
            } catch (error) {
                console.error("Error fetching users", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    return (
        <ul>
            
            <h3>Company List</h3>
            <DataTable value={users} loading={loading} paginator rows={10} responsiveLayout="scroll">
                <Column field="id" header="ID" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="position" header="Position" sortable></Column>
                <Column field="contact_email" header="Contact" sortable></Column>
                <Column field="company" header="Company" sortable></Column>
            </DataTable>
        </ul>
    );
};

export default CompanyTable