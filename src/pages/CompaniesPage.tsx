import CompanyTable from '../components/CompanyTable';
import Navbar from '../components/Navbar';
import { CompaniesContextProvider } from '../context/CompaniesContext';


function CompaniesPage () {
  return (
  
  <CompaniesContextProvider>
  <div>
    <div className='Companies'>
      <Navbar/>
    </div>
    <div> <CompanyTable/></div>
  </div>
  </CompaniesContextProvider>
  )
}

export default CompaniesPage;
