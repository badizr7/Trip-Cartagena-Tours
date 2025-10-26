import React from "react";
import "./Hero.css";
import video from "../assets/hero-video2.mp4";
import { Instagram, Facebook, Youtube, Music2 } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section id="inicio" className="hero-section">
      {/* Video de fondo */}
      <video className="hero-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>

      {/* Contenido principal */}
      <div className="hero-content">
        <h1>
          DESCUBRE EL PARAISO DEL CARIBE COLOMBIANO <br />
        </h1>
        <h3>Desde Cartagena hacia destinos inolvidables</h3>
        <p>Vive experiencias inolvidables en las islas más hermosas de Cartagena.</p>

        <div className="hero-buttons">
          <button className="btn-transparent">Elegir Tour</button>
          <button className="btn-solid">Contactar por Whatsapp📱</button>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="hero-socials">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn instagram"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn facebook"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn tiktok"
        >
          <Music2 size={20} />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn youtube"
        >
          <Youtube size={20} />
        </a>
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
