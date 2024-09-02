import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompaniesPage from "../pages/CompaniesPage";
import UsersPage from "../pages/UsersPage";
import App from "../App";


function NavigationProvider(){
    return(
        <Router>
            <Routes>
                <Route path='/Companies' element = {<CompaniesPage/>}/>
                <Route path='/Users' element = {<UsersPage/>}/>
                <Route path="/" element = {<App/>}/>
            </Routes>
        </Router>
    )
}

export default NavigationProvider;