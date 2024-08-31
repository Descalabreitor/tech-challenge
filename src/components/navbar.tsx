import { Menubar } from 'primereact/menubar'

export default function Navbar() {
    const items = [
        {
            label: 'home',
            icon: 'pi pi-home'
        },
        {
            label: 'Companies',
            icon: 'pi pi-building'
        },
        {
            label: 'Users',
            icon: 'pi-users'
        }

    ];

    return (
        <div className="card">
            <Menubar model={items}/>
        </div>
    )
}