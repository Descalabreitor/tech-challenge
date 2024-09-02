import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import CompaniesPage from './pages/CompaniesPage';
import UsersPage from './pages/UsersPage';
import HomePage from './pages/HomePage';

function App() {

  return (

  <div>
    <div className='app'>
      <BrowserRouter>
        <Routes>
            <Route path='/companies' element={<CompaniesPage/>}/>
            <Route path='/users' element={<UsersPage/>}/>
            <Route path="/" element = {<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  )
}

export default App
