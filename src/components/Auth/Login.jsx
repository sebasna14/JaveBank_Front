import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (formData.username && formData.password) {
      navigate("/welcome");
    } else {
      alert("Ingrese credenciales válidas");
    }
  };

  return (
    <div className="auth-container">
      <h1>JaveBank</h1>
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Usuario</label>
          <input type="text" name="username" onChange={handleChange} required />

          <label>Contraseña</label>
          <input type="password" name="password" onChange={handleChange} required />

          <a href="#">¿Olvidaste tu contraseña?</a>

          <button type="submit">Iniciar sesión</button>
        </form>
        <p>
          <a href="/register">Regístrese</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
