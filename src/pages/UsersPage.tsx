import Navbar from "../components/Navigation/Navbar";
import UserTable from "../components/Tables/UserTable";

function UsersPage() {
  return (
    <div>
      <div className="p-mx-4">
        <Navbar />
      </div>
      <div>
        {" "}
        <UserTable />{" "}
      </div>
    </div>
  );
}

export default UsersPage;
