import CompanyTable from '../components/CompanyTable';
import Navbar from '../components/Navbar';


function CompaniesPage () {
  return (

  <div>
    <div className='Companies'>
      <Navbar/>
    </div>
    <div> <CompanyTable/></div>
  </div>
  )
}

export default CompaniesPage;
