import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Paquetes</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contáctanos</a></li>
        </ul>
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6065/6065459.png"
            alt="Logo"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
