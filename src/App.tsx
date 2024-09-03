import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompaniesPage from "./pages/CompaniesPage";
import UsersPage from "./pages/UsersPage";
import HomePage from "./pages/HomePage";
import { UserContextProvider } from "./context/UsersContext";
import { CompaniesContextProvider } from "./context/CompaniesContext";
import DataLoader from "./services/DataLoader";

function App() {
  return (
    <UserContextProvider>
      <CompaniesContextProvider>
        <DataLoader />
        <div>
          <div className="app">
            <BrowserRouter>
              <Routes>
                <Route path="/companies" element={<CompaniesPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </CompaniesContextProvider>
    </UserContextProvider>
  );
}

export default App;
