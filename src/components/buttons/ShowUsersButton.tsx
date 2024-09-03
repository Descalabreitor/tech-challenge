import React from 'react';
import { Button } from 'primereact/button';

interface ShowUsersButtonProps {
    onClick: () => void;
}

const ShowUsersButton: React.FC<ShowUsersButtonProps> = ({ onClick }) => {
    return (
        <Button 
            icon="pi pi-search" 
            onClick={onClick} 
            className="p-button-rounded p-button-info" 
        />
    );
};

export default ShowUsersButton;
