import React, { useState } from "react";
import "./Checkout.css";

export const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [ errors, setErrors ] = useState({
    nombre: null,
    apellido: null,
    email: null,
  })

  const handleChange = (event)=>{
    setUserInfo( {...userInfo, [event.target.name]: event.target.value } )
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if ( userInfo.nombre.length < 5 || !userInfo.email.includes("@")) {

      if (userInfo.nombre.length < 5) {
        setErrors({...errors, nombre: "el nombre deber tener al menos 5 caracteres"
      })
      }

      if (!userInfo.email.includes("@") ) {
      setErrors({...errors, email: "No corresponde a un email valido"})  
      }
  
    return
    }
  console.log(userInfo)
  };
  return (
    <div className="checkout-container">
      <h1>Estoy en el checkout</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" onChange={handleChange} placeholder="Nombre" />
        <span style={{color:"red", backgroundColor:"white"}}>{errors.nombre}</span>
        <input type="text" name="apellido" onChange={handleChange} placeholder="Apellido" />
        <span style={{color:"red", backgroundColor:"white"}}>{errors.apellido}</span>
        <input type="text" name="email" onChange={handleChange} placeholder="Email" />
        <span style={{color:"red", backgroundColor:"white"}}>{errors.email}</span>
        <button className="enviar">Enviar</button>
      </form>
    </div>
  );
};