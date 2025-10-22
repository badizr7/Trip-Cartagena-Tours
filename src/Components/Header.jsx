import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li>
            <Link
              to="inicio"
              smooth={true}
              duration={600}
              offset={-70} // ajusta si tu header es fijo
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="nosotros"
              smooth={true}
              duration={600}
              offset={-70}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="paquetes"
              smooth={true}
              duration={600}
              offset={-70}
            >
              Paquetes
            </Link>
          </li>
          <li>
            <Link
              to="contacto"
              smooth={true}
              duration={600}
              offset={-70}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
