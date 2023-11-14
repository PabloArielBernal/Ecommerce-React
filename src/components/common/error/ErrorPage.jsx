import React from 'react'
import "./ErrorPage.css"
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className='error'>¡Uy! Algo salió mal.</h1>
      <p className='error'>Lo sentimos, pero la página que estás buscando no se encuentra.</p>
      <img className='img-error' src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1697741531/Ecommerce%20Tienda%20de%20Videojuegos/error.webp" alt="img-error" />
      <Link to="/" className='volver'>Ir al inicio</Link>
    </div>
  )
}
