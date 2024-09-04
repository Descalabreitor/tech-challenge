import React, { useContext, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import UserContext from "../../context/UsersContext";
import { ContextMenu } from "primereact/contextmenu";
import UserOperationsMenu from "../OperationsMenus/UserOperationsMenu";
import { User } from "../../types/User";
import { InputText } from "primereact/inputtext";

const UserTable: React.FC = () => {
  const { Users } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState<User>();
  const operationsMenu = useRef<ContextMenu>();

  const [globalFilter, setGlobalFilter] = useState(null);

  const header = (
    <div
      className="flex align-items-center justify-content-between"
      style={{ marginBottom: "10px" }}
    >
      <span className="text-xl text-900 font-bold">Users</span>
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
      <UserOperationsMenu ref={operationsMenu} selectedItem={selectedUser} />

      <DataTable
        value={Users}
        paginator
        rows={12}
        header={header}
        selectionMode="single"
        globalFilter={globalFilter}
        contextMenuSelection={selectedUser}
        onContextMenuSelectionChange={(e) => setSelectedUser(e.value as User)}
        onContextMenu={(e) => operationsMenu.current?.show(e.originalEvent)}
        className="p-datatable-gridlines"
        style={{ borderRadius: "15px", overflow: "hidden" }}
      >
        <Column field="name" header="Name" sortable></Column>
        <Column field="position" header="Position" sortable></Column>
        <Column field="contact_email" header="Contact" sortable></Column>
        <Column field="company" header="Company" sortable></Column>
      </DataTable>
    </ul>
  );
};

export default UserTable;
