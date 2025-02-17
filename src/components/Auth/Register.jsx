import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    username: "",
    cedula: "",
    correo: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      alert("Registro exitoso");
      navigate("/");
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <div className="auth-container">
      <h1>JaveBank</h1>
      <div className="auth-box">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input type="text" name="nombre" onChange={handleChange} required />

          <label>Apellido</label>
          <input type="text" name="apellido" onChange={handleChange} required />

          <label>Nombre de usuario</label>
          <input type="text" name="username" onChange={handleChange} required />

          <label>Cédula</label>
          <input type="text" name="cedula" onChange={handleChange} required />

          <label>Correo</label>
          <input type="email" name="correo" onChange={handleChange} required />

          <label>Contraseña</label>
          <input type="password" name="password" onChange={handleChange} required />

          <label>Confirmar contraseña</label>
          <input type="password" name="confirmPassword" onChange={handleChange} required />

          <button type="submit">Registrarse</button>
        </form>
        <p>
          ¿Ya tienes cuenta? <a href="/">Iniciar sesión</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
