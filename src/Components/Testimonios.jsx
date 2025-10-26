import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import testimoniosData from "../data/Testimonios";
import "./Testimonios.css";

const Testimonios = () => {
  const sectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [showControls, setShowControls] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null); // 👈 NUEVO estado para detectar hover
  const itemsPerPage = 4;
  const totalPages = Math.ceil(testimoniosData.length / itemsPerPage);
  const hideTimeoutRef = useRef(null);

  // Animación de aparición de tarjetas
  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    const cards = section.querySelectorAll(".testimonio-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [currentPage]);

  const resetVideoState = () => {
    setPlayingIndex(null);
    setShowControls(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      resetVideoState();
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      resetVideoState();
    }
  };

  const handlePlayToggle = (index) => {
    if (index === playingIndex) {
      setPlayingIndex(null);
      setShowControls(true);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    } else {
      setPlayingIndex(index);
      setShowControls(true);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => setShowControls(false), 2500);
    }
  };

  const handleMouseMove = (index) => {
    if (playingIndex !== null && index === playingIndex) {
      setShowControls(true);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => setShowControls(false), 2500);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonios = testimoniosData.slice(startIndex, endIndex);

  return (
    <section className="testimonios" id="testimonios" ref={sectionRef}>
      <h2>Testimonios de Nuestros Clientes</h2>

      <div className="testimonios-container">
        <button
          className="nav-arrow nav-arrow-left"
          onClick={handlePrev}
          disabled={currentPage === 0}
          aria-label="Anterior"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="testimonios-grid">
          {currentTestimonios.map((t, i) => {
            const isPlaying = playingIndex === i;
            const isHovered = hoveredIndex === i;

            return (
              <div
                className="testimonio-card"
                key={startIndex + i}
                onMouseEnter={() => setHoveredIndex(i)} // 👈 Mostrar al hacer hover
                onMouseLeave={() => setHoveredIndex(null)} // 👈 Ocultar al salir
              >
                <div
                  className="video-container"
                  onMouseMove={() => handleMouseMove(i)}
                >
                  <div className="video-wrapper">
                    {!isPlaying && (
                      <div
                        className="thumbnail"
                        style={{ backgroundImage: `url(${t.thumbnail})` }}
                      ></div>
                    )}

                    <video
                      ref={(el) => {
                        if (el) {
                          if (isPlaying) {
                            el
                              .play()
                              .then(() => {
                                if (hideTimeoutRef.current)
                                  clearTimeout(hideTimeoutRef.current);
                                hideTimeoutRef.current = setTimeout(
                                  () => setShowControls(false),
                                  2500
                                );
                              })
                              .catch(() => {});
                          } else {
                            el.pause();
                            el.currentTime = 0;
                          }
                        }
                      }}
                      loop
                      preload="metadata"
                      className="testimonio-video"
                    >
                      <source src={t.video} type="video/mp4" />
                    </video>

                    {/* 🔥 Solo aparece el botón cuando pasas el mouse sobre el video */}
                    <button
                      className={`play-button fade-control ${
                        isHovered ? "visible" : "hidden"
                      }`}
                      onClick={() => handlePlayToggle(i)}
                    >
                      {isPlaying ? <Pause size={42} /> : <Play size={42} />}
                    </button>
                  </div>
                </div>

                <div className="info">
                  <h3>{t.nombre}</h3>
                  <p>{t.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="nav-arrow nav-arrow-right"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          aria-label="Siguiente"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="pagination-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${
              index === currentPage ? "active" : ""
            }`}
            onClick={() => {
              setCurrentPage(index);
              resetVideoState();
            }}
            aria-label={`Ir a página ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
