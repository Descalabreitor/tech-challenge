import { useContext, useEffect } from 'react';
import { getAllCompanies } from './companiesApi';
import assignCompanyNames from './DataOperations';
import { getAllUsers } from './usersApi';
import UserContext from '../context/UsersContext';
import CompanyContext from '../context/CompaniesContext';

const DataLoader: React.FC = () => {
    const {Companies, SetCompanies} = useContext(CompanyContext);
    const {SetUsers} = useContext(UserContext);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const data = await getAllCompanies();
                SetCompanies(data);
            } catch (error) {
                console.error("Error fetching companies", error);
            }
        };

        fetchCompanies();
    }, [SetCompanies]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userData = await getAllUsers();
                SetUsers(assignCompanyNames(userData, Companies));
            } catch (error) {
                console.error("Error fetching users", error);
            }
        };

        fetchUsers();
    }, [Companies, SetUsers]);

    return null;
};

export default DataLoader;
