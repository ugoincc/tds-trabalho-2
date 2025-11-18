import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Router, Outlet } from "./contexts/Router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Vendas from "./routes/Vendas";
import Home from "./routes/Home";

const routeConfig = {
  "/": <Home />,
  "/vendas": <Vendas />,
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router id="app-container">
      <Header />
      <main className="content-wrapper">
        <Outlet routes={routeConfig} />
      </main>
      <Footer />
    </Router>
  </StrictMode>
);
