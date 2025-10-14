import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          JEEP TOURS<br />POR LAS MONTAÑAS
        </h1>
        <h3>Desde Cartagena hacia destinos inolvidables</h3>
        <p>
          Descubre la naturaleza como nunca antes: explora montañas majestuosas, caminos escondidos y paisajes únicos. 
          Nuestros recorridos en jeep te ofrecen una experiencia inolvidable llena de aventura y conexión con la naturaleza.
        </p>
        <div className="hero-buttons">
          <button className="btn-transparent">Elegir Tour</button>
          <button className="btn-solid">Conoce más</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
