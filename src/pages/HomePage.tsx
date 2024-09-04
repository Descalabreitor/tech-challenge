import Footer from "../components/Footer";
import Navbar from "../components/Navigation/Navbar";

function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div className="header">
        <Navbar />
      </div>
      <div
        className="p-d-flex p-flex-column p-ai-center p-jc-center"
        style={{ flex: 1 }}
      >
        {/* Título */}
        <h1 className="p-mb-5" style={{ textAlign: "center" }}>
          Companies administration app
        </h1>

        {/* Descripción */}
        <p className="p-mb-5" style={{ textAlign: "center", fontSize: 30 }}>
          This app allows you to interact and modify a database containing a
          list of companies and the assosiated users.
        </p>
        <p className="p-mb-5" style={{ textAlign: "center", fontSize: 30 }}>
          It has been developed as a react tech challenge.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
