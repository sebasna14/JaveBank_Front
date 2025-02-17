import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="welcome-container">
      <h1>JaveBank</h1>
      <div className="welcome-box">
        <h2>Sección iniciada exitosamente</h2>
        <p>Bienvenido (usuario)</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
};

export default Welcome;
