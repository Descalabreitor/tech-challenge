import Navbar from '../components/Navigation/Navbar';
import UserTable from '../components/Tables/UserTable';



function UsersPage() {

  return (
    <div>
      <div className='Users'>
        <Navbar/>
      </div>
      <div> <UserTable/> </div>
    </div>
  )
}

export default UsersPage;