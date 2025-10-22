import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Nosotros from "./Components/Nosotros";
import Paquetes from "./Components/Paquetes";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";
import WhatsAppButton from "./Components/WhatsAppButton";
import PaqueteDetalles from "./Components/PaqueteDetalles";
import ScrollToTop from "./Components/ScrollToTop"; // 👈 nuevo import

const Home = () => {
  return (
    <>
      <Hero />
      <Nosotros />
      <Paquetes />
      <Contacto />
    </>
  );
};

function AppContent() {
  const location = useLocation();
  const ocultarLayout = location.pathname.startsWith("/paquete/");

  return (
    <>
      {!ocultarLayout && <Header />}
      <ScrollToTop /> {/* 👈 aquí lo agregas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paquete/:id" element={<PaqueteDetalles />} />
      </Routes>
      {!ocultarLayout && <Footer />}
      {!ocultarLayout && <WhatsAppButton />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
