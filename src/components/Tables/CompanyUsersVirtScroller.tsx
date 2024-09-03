import React, { useContext } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { User } from "../../types/User";
import UserContext from '../../context/UsersContext';

interface CompanyUsersVirtualScrollerProps {
    companyId: number;
}

const filterCompanyUsers = (companyId: number, users: Array<User>): Array<User> => {
    return users.filter(user => user.companyId == companyId);
};

const CompanyUsersVirtualScroller: React.FC<CompanyUsersVirtualScrollerProps> = ({ companyId }) => {
    const { Users } = useContext(UserContext);
    const CompanyUsers = filterCompanyUsers(companyId, Users)
    console.log(CompanyUsers)
    return (
        <VirtualScroller
            items={CompanyUsers}
            itemTemplate={(user: User) => (
                <div>
                    <div><strong>{user.name}</strong></div>
                </div>
            )}
            itemSize={50}
            className="border-1 surface-border border-round" 
            style={{ width: '200px', height: '200px' }}
        />
    );
};

export default CompanyUsersVirtualScroller;
