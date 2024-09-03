import { Menubar } from "primereact/menubar";
import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      label: "Companies",
      icon: "pi pi-building",
      command: () => navigate("/companies"),
    },
    {
      label: "Users",
      icon: "pi pi-users",
      command: () => navigate("/users"),
    },
  ];

  return (
    <div>
      <header>
        <nav>
          <ul>
            <Menubar model={items} />
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
