import React, { useContext, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import CompanyContext from "../../context/CompaniesContext";
import { Company } from "../../types/Company";
import ShowUsersButton from "../buttons/ShowUsersButton";
import CompanyUsersVirtualScroller from "./CompanyUsersVirtScroller";
import { OverlayPanel } from "primereact/overlaypanel";
import { ContextMenu } from "primereact/contextmenu";
import CompanyOperationsMenu from "../OperationsMenus/CompanyOperationsMenu";
import { InputText } from "primereact/inputtext";

const CompanyTable: React.FC = () => {
  const { Companies } = useContext(CompanyContext);
  const [selectedCompany, setSelectedCompany] = useState<Company>();
  const [globalFilter, setGlobalFilter] = useState(null);

  const companyUsersOverlay = useRef<OverlayPanel>(null); // Referencia para el OverlayPanel
  const operationsMenu = useRef<ContextMenu>();

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: Company
  ) => {
    setSelectedCompany(item);
    companyUsersOverlay.current?.toggle(event); // Mostrar el OverlayPanel al hacer clic
  };

  const actionBodyTemplate = (rowData: Company) => {
    return (
      <ShowUsersButton
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleButtonClick(e, rowData)
        }
      />
    );
  };

  const header = (
    <div
      className="flex align-items-center justify-content-between"
      style={{ marginBottom: "10px" }}
    >
      <span className="text-xl text-900 font-bold">Companies</span>
      <div className="p-inputgroup" style={{ width: "400px" }}>
        <span className="p-inputgroup-addon">
          <i className="pi pi-search" />
        </span>
        <InputText
          type="search"
          placeholder="Search"
          onInput={(e) => {
            setGlobalFilter(e.target.value);
          }}
        />
      </div>
    </div>
  );

  return (
    <ul>
      <CompanyOperationsMenu
        ref={operationsMenu}
        selectedItem={selectedCompany}
      />

      <DataTable
        value={Companies}
        paginator
        rows={10}
        header={header}
        globalFilter={globalFilter}
        selectionMode="single"
        contextMenuSelection={selectedCompany}
        onContextMenuSelectionChange={(e) =>
          setSelectedCompany(e.value as Company)
        }
        onContextMenu={(e) => operationsMenu.current?.show(e.originalEvent)}
        className="p-datatable-gridlines"
        style={{ borderRadius: "15px", overflow: "hidden" }}
      >
        <Column field="name" header="Name" sortable></Column>
        <Column field="location" header="Location" sortable></Column>
        <Column field="business_area" header="Business Area" sortable></Column>
        <Column field="company_size" header="Company Size" sortable></Column>
        <Column body={actionBodyTemplate} header="Show company users" />
      </DataTable>

      <OverlayPanel ref={companyUsersOverlay} showCloseIcon id="overlay_panel">
        {selectedCompany && (
          <div style={{ padding: "10px" }}>
            <h4>Users of {selectedCompany.name}</h4>
            <CompanyUsersVirtualScroller companyId={selectedCompany.id} />
          </div>
        )}
      </OverlayPanel>
    </ul>
  );
};

export default CompanyTable;
