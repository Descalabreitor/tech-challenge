import Navbar from '../components/Navbar';
import UserTable from '../components/UserTable';
import { UserContextProvider } from '../context/UsersContext';



function UsersPage() {

  return (
  <UserContextProvider>
    <div>
      <div className='Users'>
        <Navbar/>
      </div>
      <div> <UserTable/> </div>
    </div>
  </UserContextProvider>
  )
}

export default UsersPage;