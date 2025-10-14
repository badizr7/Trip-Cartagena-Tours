import React from "react";
import { Paquetes } from "../data/Paquetes";
import "./Paquetes.css";

const PaquetesSection = () => {
  return (
    <section className="paquetes-section">
      <h2 className="paquetes-title">Discover the world</h2>
      <div className="paquetes-grid">
        {Paquetes.map((p) => (
          <div key={p.id} className="paquete-card">
            <div
              className="paquete-img"
              style={{ backgroundImage: `url(${p.image})` }}
            ></div>
            <div className="paquete-info">
              <p className="paquete-lugar">{p.description}</p>
              <h3 className="paquete-nombre">{p.name}</h3>
              <div className="paquete-footer">
                <span className="paquete-precio">
                  ${p.price} <small>/persona</small>
                </span>
                <button className="paquete-btn">Ver Detalles →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaquetesSection;
