import { Link } from "../contexts/Router";

const navItems = [
  { label: "Home", link: "/" },
  { label: "Vendas", link: "/vendas" },
  { label: "Serviços", link: "/" },
  { label: "Notícias", link: "/" },
  { label: "Contato", link: "/contato" },
];

function Header() {
  return (
    <header id="cabecalho">
      <div id="barra-superior" className="container-fluid">
        <span className="telefone">+44 (0)1 923 287 687</span>
        <div className="icones-sociais">
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <nav
        id="menu-principal"
        className="container navbar navbar-expand-md navbar-dark"
      >
        <a href="#" id="logo" className="navbar-brand">
          {" "}
          HK Engineering
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu-navegacao"
          aria-controls="menu-navegacao"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu-navegacao">
          <ul className="lista-menu navbar-nav me-auto">
            {navItems.map((item) => (
              <li className="nav-item">
                <Link className="nav-link" to={item.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="area-pesquisa">
            <input type="search" placeholder="Buscar..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
