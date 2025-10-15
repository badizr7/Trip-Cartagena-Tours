import React, { useState, useEffect } from "react";
import { Paquetes } from "../data/Paquetes";
import "./Paquetes.css";

const PaquetesSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [currentIndexes, setCurrentIndexes] = useState({});

  useEffect(() => {
    if (hoveredId === null) return;

    const images = Paquetes.find(p => p.id === hoveredId).images;
    const interval = setInterval(() => {
      setCurrentIndexes(prev => ({
        ...prev,
        [hoveredId]: (prev[hoveredId] + 1) % images.length
      }));
    }, 1200); 

    return () => clearInterval(interval);
  }, [hoveredId]);

  return (
    <section className="paquetes-section">
      <h2 className="paquetes-title">Descubre Nuestros Paquetes Turísticos</h2>
      <div className="paquetes-grid">
        {Paquetes.map((p) => {
          const currentIndex = currentIndexes[p.id] || 0;
          return (
            <div
              key={p.id}
              className="paquete-card"
              onMouseEnter={() => {
                setHoveredId(p.id);
                setCurrentIndexes(prev => ({ ...prev, [p.id]: 0 }));
              }}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="paquete-img">
                {p.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="paquete-img-fade"
                    style={{
                      backgroundImage: `url(${img})`,
                      opacity: idx === currentIndex ? 1 : 0
                    }}
                  ></div>
                ))}
              </div>
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
          );
        })}
      </div>
    </section>
  );
};

export default PaquetesSection;
