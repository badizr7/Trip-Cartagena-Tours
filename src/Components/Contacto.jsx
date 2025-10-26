import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from "lucide-react";
import "./Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // ← ya sin anotación TS

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    });

    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <div className="contacto-header">
          <h2 className="contacto-title">Contáctanos</h2>
          <p className="contacto-subtitle">
            Estamos aquí para ayudarte a planificar tu próxima aventura
          </p>
        </div>

        <div className="contacto-content">
          <div className="contacto-info">
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={28} />
              </div>
              <div className="info-text">
                <h3>Ubicación</h3>
                <p>Cartagena de Indias, Colombia</p>
                <p className="info-detail">Centro Histórico</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Phone size={28} />
              </div>
              <div className="info-text">
                <h3>Teléfono</h3>
                <p>+57 300 123 4567</p>
                <p className="info-detail">Lun - Dom: 7:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Mail size={28} />
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <p>info@tripcartagenatours.com</p>
                <p className="info-detail">Respuesta en 24 horas</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Clock size={28} />
              </div>
              <div className="info-text">
                <h3>Horario</h3>
                <p>Todos los días</p>
                <p className="info-detail">Tours de 7:00 AM a 6:00 PM</p>
              </div>
            </div>

            <div className="info-extra">
              <MessageCircle size={24} />
              <div>
                <h4>WhatsApp</h4>
                <p>Chatea con nosotros ahora mismo</p>
              </div>
            </div>
          </div>

          <div className="contacto-form-wrapper">
            <form className="contacto-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+57 300 123 4567"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu aventura ideal..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className={`submit-button ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send size={20} />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="submit-message success">
                  ¡Mensaje enviado con éxito! Te contactaremos pronto.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="submit-message error">
                  Hubo un error. Por favor intenta de nuevo.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
