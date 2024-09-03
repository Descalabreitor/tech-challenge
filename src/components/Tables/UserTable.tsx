import React, { useContext, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getAllUsers } from '../../services/usersApi';
import { User } from '../../types/User';
import { getAllCompanies } from '../../services/companiesApi';
import UserContext from '../../context/UsersContext';
import { Company } from '../../types/Company';

function assignCompanyNames(users: User[], companies: Company[]): User[] {
    // Crear un mapa para que la búsqueda sea más eficiente
    const companyMap: { [key: number]: string } = {};

    // Llenar el mapa con id de la compañía como clave y el nombre como valor
    companies.forEach(company => {
        companyMap[company.id] = company.name;
    });
    // Asignar el nombre de la compañía correspondiente a cada usuario
    const updatedUsers = users.map(user => ({
        ...user,
        company: companyMap[user.companyId] || "Unknown Company" // Asigna "Unknown Company" si no se encuentra la compañía
    }));
    
    return updatedUsers;
}

const CompanyTable: React.FC = () => {
    const { Users, SetUsers} = useContext(UserContext);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const [userData, companyData] = await Promise.all([getAllUsers(), getAllCompanies()]);
                SetUsers(assignCompanyNames(userData, companyData));
                
            } catch (error) {
                console.error("Error fetching users", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, [SetUsers]);

    return (
        <ul>
            
            <h3>Users</h3>
            <DataTable value={Users} loading={loading} paginator rows={10}>
                <Column field="name" header="Name" sortable></Column>
                <Column field="position" header="Position" sortable></Column>
                <Column field="contact_email" header="Contact" sortable></Column>
                <Column field="company" header="Company" sortable></Column>
            </DataTable>
        </ul>
    );
};

export default CompanyTable