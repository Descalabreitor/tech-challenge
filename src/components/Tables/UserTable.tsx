import React, { useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import UserContext from '../../context/UsersContext';



const CompanyTable: React.FC = () => {
    const { Users} = useContext(UserContext);

    return (
        <ul>
            
            <h3>Users</h3>
            <DataTable value={Users} paginator rows={10}>
                <Column field="name" header="Name" sortable></Column>
                <Column field="position" header="Position" sortable></Column>
                <Column field="contact_email" header="Contact" sortable></Column>
                <Column field="company" header="Company" sortable></Column>
            </DataTable>
        </ul>
    );
};

export default CompanyTable