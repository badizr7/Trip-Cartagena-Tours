import React from "react";
import "./Hero.css";
import video from "../assets/hero-video.mp4";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section">
      {/* Video de fondo */}
      <video className="hero-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>

      {/* Contenido encima del video */}
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
          <button className="btn-solid">Contactar por Whatsapp</button>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="scroll-indicator" onClick={scrollToContent}>
        <span>Explora</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
