import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, MapPin, Clock, Users } from "lucide-react";
import { Paquetes } from "../data/Paquetes";
import "./PaqueteDetalles.css";

const PaqueteDetalles = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const paquete = Paquetes.find((p) => p.id === parseInt(id));

  if (!paquete) {
    return (
      <div className="paquete-detalles-error">
        <div className="error-content">
          <h2>Paquete no encontrado</h2>
          <p>Lo sentimos, el paquete que buscas no existe.</p>
          <button className="btn-volver-error" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
            Volver a paquetes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="paquete-detalles-container">
      <button className="btn-volver" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
        Volver
      </button>

      <div className="paquete-detalles-content">
        <div className="paquete-imagenes-wrapper">
          <div className="paquete-slider">
            {paquete.images && paquete.images.map((img, index) => (
              <div
                key={index}
                className="slide"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="slide-overlay"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="paquete-detalles-card">
          <div className="paquete-header-info">
            <div className="paquete-badge">
              <MapPin size={16} />
              {paquete.location || "Colombia"}
            </div>
            <h1 className="paquete-titulo">{paquete.name}</h1>
          </div>

          <div className="paquete-meta">
            <div className="meta-item">
              <Clock size={18} />
              <span>{paquete.duration || "Día completo"}</span>
            </div>
            <div className="meta-item">
              <Users size={18} />
              <span>{paquete.groupSize || "Grupos pequeños"}</span>
            </div>
          </div>

          <div className="paquete-descripcion-box">
            <h2>Descripción</h2>
            <p className="paquete-descripcion">{paquete.description}</p>
          </div>

          <div className="paquete-incluye-box">
            <h2>Lo que incluye</h2>
            <ul className="incluye-lista">
              {paquete.includes && paquete.includes.map((item, index) => (
                <li key={index}>
                  <Check size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="paquete-precio-box">
            <div className="precio-info">
              <span className="precio-label">Precio por persona</span>
              <span className="precio-valor">${paquete.price} COP</span>
            </div>
            <button className="btn-reservar">
              Reservar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaqueteDetalles;
