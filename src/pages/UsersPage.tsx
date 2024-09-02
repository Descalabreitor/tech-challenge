import Navbar from '../components/Navbar';
import UserTable from '../components/UserTable';



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