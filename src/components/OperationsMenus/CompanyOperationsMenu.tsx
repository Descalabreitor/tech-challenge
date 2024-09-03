import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { ContextMenu } from 'primereact/contextmenu';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Company } from '../../types/Company'; // Asegúrate de importar la interfaz correcta

interface ContextMenuCrudProps {
    selectedItem: Company | undefined;
}

const ContextMenuCrud = forwardRef<any, ContextMenuCrudProps>(({ selectedItem }, ref) => {
    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [newData, setNewData] = useState<Company>({ id: 0, name: '', location: '', business_area: '', company_size: 'small' });

    useImperativeHandle(ref, () => ({
        show(event: React.MouseEvent) {
            cmRef.current?.show(event);
        }
    }));

    const cmRef = React.useRef<ContextMenu>(null);

    // Abrir diálogo de creación/modificación
    const openEditDialog = (item: Company) => {
        setNewData(item);
        setEditDialog(true);
    };

    // Guardar cambios
    const saveData = () => {
        setEditDialog(false);
    };

    // Confirmar eliminación
    const confirmDelete = () => {
        if (selectedItem) {
            setDeleteDialog(false);
        }
    };

    // Opciones del menú contextual
    const menuItems = [
        {
            label: 'Crear',
            icon: 'pi pi-plus',
            command: () => openEditDialog({ id: 0, name: '', location: '', business_area: '', company_size: 'small' })
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

            {/* Diálogo de creación/modificación */}
            <Dialog visible={editDialog} style={{ width: '400px' }} header="Edit Company" modal className="p-fluid" onHide={() => setEditDialog(false)}>
                <div className="p-field">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
                </div>
                <div className="p-field">
                    <label htmlFor="location">Location</label>
                    <InputText id="location" value={newData.location} onChange={(e) => setNewData({ ...newData, location: e.target.value })} />
                </div>
                <div className="p-field">
                    <label htmlFor="business_area">Business Area</label>
                    <InputText id="business_area" value={newData.business_area} onChange={(e) => setNewData({ ...newData, business_area: e.target.value })} />
                </div>
                <div className="p-field">
                    <label htmlFor="company_size">Company Size</label>
                    <InputText id="company_size" value={newData.company_size} onChange={(e) => setNewData({ ...newData, company_size: e.target.value })} />
                </div>
                <Button label="Save" icon="pi pi-check" onClick={saveData} />
            </Dialog>

            {/* Diálogo de confirmación de eliminación */}
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