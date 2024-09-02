import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getUsers } from '../services/usersApi';
import { User } from '../types/User';

const CompanyTable: React.FC = () => {
    const [companies, setCompanies] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const data = await getUsers();
                setCompanies(data);
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
            <DataTable value={companies} loading={loading} paginator rows={10} responsiveLayout="scroll">
                <Column field="id" header="ID" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="position" header="Position" sortable></Column>
                <Column field="contact_email" header="Contact" sortable></Column>
            </DataTable>
        </ul>
    );
};

export default CompanyTable