import React from "react";
import { Button } from "primereact/button";

const Footer: React.FC = () => {
  return (
    <footer
      className="p-d-flex p-ai-center p-jc-center"
      style={{
        padding: "1rem",
        alignContent: "center",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Button
          label="View my GitHub Profile"
          icon="pi pi-github"
          className="p-button-rounded p-button-secondary"
          onClick={() =>
            window.open("https://github.com/Descalabreitor", "_blank")
          }
          style={{ padding: "1rem", fontSize: "1.2rem", marginRight: "1rem" }}
        />

        <Button
          label="View Project repository"
          icon="pi pi-book"
          className="p-button-rounded p-button-info"
          onClick={() =>
            window.open(
              "https://github.com/Descalabreitor/tech-challenge",
              "_blank"
            )
          }
          style={{ padding: "1rem", fontSize: "1.2rem", marginRight: "1rem" }}
        />

        <Button
          label="View database"
          icon="pi pi-database"
          className="p-button-rounded p-button-primary"
          onClick={() => window.open("http://localhost:5000/", "_blank")}
          style={{ padding: "1rem", fontSize: "1.2rem" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
