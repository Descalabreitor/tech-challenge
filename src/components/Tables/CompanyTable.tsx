import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getAllCompanies } from '../../services/companiesApi';
import CompanyContext from '../../context/CompaniesContext';
import { Company } from '../../types/Company';
import ShowUsersButton from '../buttons/ShowUsersButton';
import CompanyUsersVirtualScroller from './CompanyUsersVirtScroller';
import { OverlayPanel } from 'primereact/overlaypanel';

const CompanyTable: React.FC = () => {
    const { Companies, SetCompanies } = useContext(CompanyContext);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

    const op = useRef<OverlayPanel>(null); // Referencia para el OverlayPanel

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

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, item: Company) => {
        setSelectedCompany(item);
        op.current?.toggle(event); // Mostrar el OverlayPanel al hacer clic
    };

    const actionBodyTemplate = (rowData: Company) => {
        return (
            <ShowUsersButton onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleButtonClick(e, rowData)} />
        );
    };

    return (
        <div>
            <h3>Companies</h3>
            <DataTable value={Companies} loading={loading} paginator rows={10} selectionMode="single">
                <Column field="name" header="Name" sortable></Column>
                <Column field="location" header="Location" sortable></Column>
                <Column field="business_area" header="Business Area" sortable></Column>
                <Column field="company_size" header="Company Size" sortable></Column>
                <Column body={actionBodyTemplate} header="Show company users" />
            </DataTable>

            <OverlayPanel ref={op} showCloseIcon id="overlay_panel">
                {selectedCompany && (
                    <div style={{ padding: '10px' }}>
                        <h4>Users of {selectedCompany.name}</h4>
                        <CompanyUsersVirtualScroller companyId={selectedCompany.id} />
                    </div>
                )}
            </OverlayPanel>
        </div>
    );
};

export default CompanyTable;
