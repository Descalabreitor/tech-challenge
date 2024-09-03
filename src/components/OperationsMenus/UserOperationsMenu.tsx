import React, { useState, forwardRef, useImperativeHandle, useContext } from 'react';
import { ContextMenu } from 'primereact/contextmenu';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { User } from '../../types/User';
import UserContext from '../../context/UsersContext';
import { createUserDB, deleteUserDB, updateUserDB } from '../../services/usersApi';
import CompanyContext from '../../context/CompaniesContext';
import { Dropdown } from 'primereact/dropdown';

interface ContextMenuCrudProps {
    selectedItem: User | undefined;
}

const ContextMenuCrud = forwardRef<any, ContextMenuCrudProps>(({ selectedItem }, ref) => {
    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [newData, setNewData] = useState<User>({ id: -1, name: '', company: '', companyId: -1, position: '', contact_email: '' });

    const {Users, SetUsers} = useContext(UserContext) 
    const {Companies} = useContext(CompanyContext)

    useImperativeHandle(ref, () => ({
        show(event: React.MouseEvent) {
            cmRef.current?.show(event);
        }
    }));

    const cmRef = React.useRef<ContextMenu>(null);

    // Abrir diálogo de creación/modificación
    const openEditDialog = (item: User) => {
        setNewData(item);
        setEditDialog(true);
    };

    function assignCompanyId(companyName: string): number{
        
        const companyNameIdMap: { [key: string]: number } = {};

        Companies.forEach(company => {
            companyNameIdMap[company.name] = company.id;
        });

        const companyId = companyNameIdMap.get(companyName)

        return companyId
    }

    const editData = (updatedUser: User) => {
        const updatedUsers = Users.map((user: User) =>
            user.id === updatedUser.id ? updatedUser : user
        );
        SetUsers(updatedUsers)
        updateUserDB(updatedUser.id, updatedUser)
    }

    const addData = (newUser: User) => {
        newUser.id = Users.length
        newUser.companyId = assignCompanyId(newUser.company)
        console.log(newUser)
        SetUsers([...Users, newUser])
        createUserDB(newUser)
    }

    // Guardar cambios
    const saveData = () => {
        console.log("Wow")
        if (newData.id >= 0){
            editData(newData)
        }else{
            addData(newData)
        }
        setEditDialog(false);
    };

    // Confirmar eliminación
    const confirmDelete = () => {
        const filteredUsers = Users.filter((user) => user.id !== selectedItem.id)
        SetUsers(filteredUsers)
        deleteUserDB(selectedItem.id)

        if (selectedItem) {
            setDeleteDialog(false);
        }
    };

    // Opciones del menú contextual
    const menuItems = [
        {
            label: 'New',
            icon: 'pi pi-plus',
            command: () => openEditDialog({ id: 0, name: '', company: '', companyId: 0, position: '', contact_email: '' })
        },
        {
            label: 'Modify',
            icon: 'pi pi-pencil',
            command: () => selectedItem && openEditDialog(selectedItem),
            disabled: !selectedItem
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => setDeleteDialog(true),
            disabled: !selectedItem
        }
    ];

    return (
        <>
            <ContextMenu model={menuItems} ref={cmRef} />

            
            <Dialog visible={editDialog} style={{ width: '400px' }} header="User data" modal className="p-fluid" onHide={() => setEditDialog(false)}>
                <div className="p-field">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
                </div>
                <div className="p-field">
            <label htmlFor="company">Company</label>
            <Dropdown
                id="company"
                value={newData.companyId}  // Se establece el id de la compañía seleccionada como valor del Dropdown
                options={Companies.map(company => ({ label: company.name, value: company.id }))}  // Mapeamos las compañías a un formato adecuado para el Dropdown
                onChange={(e) => {
                    const selectedCompany = Companies.find(company => company.id === e.value);
                    if (selectedCompany) {
                        setNewData({
                            ...newData,
                            company: selectedCompany.name,  // Asignamos el nombre de la compañía al campo company
                            companyId: selectedCompany.id  // Asignamos el id de la compañía al campo companyId
                        });
                    }
                }}
                placeholder="Select a Company"
            />
        </div>
                <div className="p-field">
                    <label htmlFor="position">Position</label>
                    <InputText id="position" value={newData.position} onChange={(e) => setNewData({ ...newData, position: e.target.value })} />
                </div>
                <div className="p-field">
                    <label htmlFor="contact_email">Email</label>
                    <InputText id="contact_email" value={newData.contact_email} onChange={(e) => setNewData({ ...newData, contact_email: e.target.value })} />
                </div>
                <Button label="Save" icon="pi pi-check" onClick={saveData} />
            </Dialog>

            
            <Dialog visible={deleteDialog} style={{ width: '350px' }} header="Confirm Delete" modal footer={
                <>
                    <Button label="No" icon="pi pi-times" className="p-button-text" onClick={() => setDeleteDialog(false)} />
                    <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={confirmDelete} />
                </>
            } onHide={() => setDeleteDialog(false)}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                    {selectedItem && <span>Are you sure you want to delete <b>{selectedItem.name}</b>?</span>}
                </div>
            </Dialog>
        </>
    );
});

export default ContextMenuCrud;