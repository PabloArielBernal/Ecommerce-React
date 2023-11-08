import React, { useState } from "react";
import "./CustomModal.css";

export const CustomModal = ({ isOpen, onClose, children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {

    console.log(
      `Iniciando sesión con usuario: ${username} y contraseña: ${password}`
    );
  };

  return (
    <div className="inicio-container">
        <div className="inicio-item">
            <div className="login">{children}</div>
            </div>
    </div>
  );
};
