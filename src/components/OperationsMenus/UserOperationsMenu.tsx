import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { ContextMenu } from 'primereact/contextmenu';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { User } from '../../types/User';

interface ContextMenuCrudProps {
    selectedItem: User | null;
    updateData: (newData: User) => void;
    deleteData: (item: User) => void;
}

const ContextMenuCrud = forwardRef<any, ContextMenuCrudProps>(({ selectedItem, updateData, deleteData }, ref) => {
    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [newData, setNewData] = useState<User>({ id: 0, name: '', company: '', companyId: 0, position: '', contact_email: '' });

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

    // Guardar cambios
    const saveData = () => {
        updateData(newData);
        setEditDialog(false);
    };

    // Confirmar eliminación
    const confirmDelete = () => {
        if (selectedItem) {
            deleteData(selectedItem);
            setDeleteDialog(false);
        }
    };

    // Opciones del menú contextual
    const menuItems = [
        {
            label: 'Crear',
            icon: 'pi pi-plus',
            command: () => openEditDialog({ id: 0, name: '', company: '', companyId: 0, position: '', contact_email: '' })
        },
        {
            label: 'Modificar',
            icon: 'pi pi-pencil',
            command: () => selectedItem && openEditDialog(selectedItem),
            disabled: !selectedItem
        },
        {
            label: 'Eliminar',
            icon: 'pi pi-trash',
            command: () => setDeleteDialog(true),
            disabled: !selectedItem
        }
    ];

    return (
        <>
            <ContextMenu model={menuItems} ref={cmRef} />

            
            <Dialog visible={editDialog} style={{ width: '400px' }} header="Edit User" modal className="p-fluid" onHide={() => setEditDialog(false)}>
                <div className="p-field">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
                </div>
                <div className="p-field">
                    <label htmlFor="company">Company</label>
                    <InputText id="company" value={newData.company} onChange={(e) => setNewData({ ...newData, company: e.target.value })} />
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
