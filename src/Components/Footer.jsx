import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Mountain } from "lucide-react";
import { Link } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* --- Columna Logo --- */}
          <div className="footer-column footer-brand">
            <div className="footer-logo">
              <Mountain size={40} strokeWidth={1.5} />
              <span>Trip Cartagena Tours</span>
            </div>
            <p className="footer-description">
              Vive experiencias únicas en los paisajes más impresionantes de Colombia.
              Aventura, naturaleza y cultura en cada recorrido.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* --- Columna Navegación --- */}
          <div className="footer-column">
            <h3 className="footer-title">Navegación</h3>
            <ul className="footer-links">
              <li>
                <Link
                  to="inicio"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="footer-link-button"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="paquetes"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="footer-link-button"
                >
                  Paquetes
                </Link>
              </li>
              <li>
                <Link
                  to="nosotros"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="footer-link-button"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="contacto"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="footer-link-button"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* --- Columna Servicios --- */}
          <div className="footer-column">
            <h3 className="footer-title">Servicios</h3>
            <ul className="footer-links">
              <li><a href="#">Tours Privados</a></li>
              <li><a href="#">Tours Grupales</a></li>
              <li><a href="#">Excursiones</a></li>
              <li><a href="#">Eventos Corporativos</a></li>
            </ul>
          </div>

          {/* --- Columna Contacto --- */}
          <div className="footer-column">
            <h3 className="footer-title">Contacto</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>Cartagena de Indias, Colombia</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+57 300 123 4567</span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@tripcartagenatours.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 JeepTours Colombia. Todos los derechos reservados.
          </p>
          <div className="footer-legal">
            <a href="#">Términos y Condiciones</a>
            <span className="separator">|</span>
            <a href="#">Política de Privacidad</a>
            <span className="separator">|</span>
            <a href="#">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
