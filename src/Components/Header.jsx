import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
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
