import React, { useContext, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import UserContext from '../../context/UsersContext';
import { ContextMenu } from 'primereact/contextmenu';
import UserOperationsMenu from '../OperationsMenus/UserOperationsMenu';
import { User } from '../../types/User';



const CompanyTable: React.FC = () => {
    const { Users} = useContext(UserContext);
    const [selectedUser, setSelectedUser] = useState<User>();
    const operationsMenu = useRef<ContextMenu>();

    return (
        <ul>
            <h3>Users</h3>

            <UserOperationsMenu
                ref={operationsMenu}
                selectedItem={selectedUser}
            />

            <DataTable value={Users} paginator rows={10} selectionMode="single"
            contextMenuSelection = {selectedUser} onContextMenuSelectionChange={(e) => setSelectedUser(e.value as User)} 
            onContextMenu={(e) => operationsMenu.current?.show(e.originalEvent)}>
                <Column field="name" header="Name" sortable></Column>
                <Column field="position" header="Position" sortable></Column>
                <Column field="contact_email" header="Contact" sortable></Column>
                <Column field="company" header="Company" sortable></Column>
            </DataTable>
        </ul>
    );
};

export default CompanyTable