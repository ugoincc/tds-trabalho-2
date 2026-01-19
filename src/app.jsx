import { StrictMode, useState } from "react"; // Adicionado useState
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Router, Outlet } from "./contexts/Router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Vendas from "./routes/Vendas";
import Home from "./routes/Home";
import Contato from "./routes/Contato";
import Noticias from "./routes/Noticias";

const routeConfig = {
  "/": <Home />,
  "/vendas": <Vendas />,
  "/contato": <Contato />,
  "/noticias": <Noticias />,
};

function MainApp() {
  const [mostrarAviso, setMostrarAviso] = useState(true);

  return (
    <Router id="app-container">
      {/* Aviso Mobile */}
      {mostrarAviso && (
        <div className="aviso-mobile">
          <span>
            <i className="fas fa-mobile-alt me-2"></i>
            Atenção: Para uma melhor experiência, acesse o site via computador.
          </span>
          <button 
            className="close-button" 
            onClick={() => setMostrarAviso(false)}
          >
            &times;
          </button>
        </div>
      )}

      <Header />
      
      <main className="content-wrapper">
        <Outlet routes={routeConfig} />
      </main>

      <Footer />
    </Router>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);