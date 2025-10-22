import React from "react";
import { Target, Eye, Users } from "lucide-react";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <section id="nosotros" className="nosotros-section">
      <div className="nosotros-container">
        {/* Encabezado */}
        <div className="nosotros-header">
          <h2 className="nosotros-title">Conoce Nuestra Historia</h2>
          <p className="nosotros-subtitle">
            Más de 10 años creando experiencias inolvidables en las montañas de Colombia
          </p>
        </div>

        {/* Quiénes Somos */}
        <div className="nosotros-intro">
          <div className="intro-content">
            <h3>¿Quiénes Somos?</h3>
            <p>
              Somos un equipo apasionado por la aventura y el turismo sostenible.
              Desde Cartagena, ofrecemos experiencias únicas en jeep por las montañas
              colombianas, combinando la emoción de la aventura con el respeto por
              la naturaleza y las comunidades locales.
            </p>
            <p>
              Nuestro equipo está conformado por guías expertos, conductores certificados
              y amantes de la naturaleza que se dedican a hacer de cada tour una experiencia
              memorable y segura para nuestros visitantes.
            </p>
          </div>
          <div className="intro-images">
            <div className="polaroid-grid">
              <div className="polaroid polaroid-1">
                <img
                  src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Montañas de Colombia"
                />
              </div>
              <div className="polaroid polaroid-2">
                <img
                  src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Aventura en Jeep"
                />
              </div>
              <div className="polaroid polaroid-3">
                <img
                  src="https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Naturaleza colombiana"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Misión, Visión y Valores */}
        <div className="nosotros-cards">
          <div className="nosotros-card">
            <div className="card-icon">
              <Target size={40} />
            </div>
            <h3>Nuestra Misión</h3>
            <p>
              Ofrecer experiencias de turismo de aventura excepcionales,
              conectando a nuestros visitantes con la belleza natural de las
              montañas colombianas, promoviendo el turismo sostenible y
              apoyando a las comunidades locales.
            </p>
          </div>

          <div className="nosotros-card">
            <div className="card-icon">
              <Eye size={40} />
            </div>
            <h3>Nuestra Visión</h3>
            <p>
              Ser reconocidos como la empresa líder en tours de aventura en
              Colombia, destacándonos por la calidad de nuestros servicios,
              el compromiso con el medio ambiente y la satisfacción de
              nuestros clientes.
            </p>
          </div>

          <div className="nosotros-card">
            <div className="card-icon">
              <Users size={40} />
            </div>
            <h3>Nuestros Valores</h3>
            <p>
              Seguridad, respeto por la naturaleza, compromiso con la excelencia,
              pasión por la aventura, y dedicación al servicio al cliente.
              Trabajamos cada día para superar las expectativas de quienes
              confían en nosotros.
            </p>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="nosotros-stats">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Clientes Satisfechos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Rutas Disponibles</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Seguridad Garantizada</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
