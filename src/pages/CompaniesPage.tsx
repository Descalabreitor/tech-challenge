import CompanyTable from "../components/Tables/CompanyTable";
import Navbar from "../components/Navigation/Navbar";

function CompaniesPage() {
  return (
    <div>
      <div className="Companies">
        <Navbar />
      </div>

      <div>
        {" "}
        <CompanyTable />
      </div>
    </div>
  );
}

export default CompaniesPage;
