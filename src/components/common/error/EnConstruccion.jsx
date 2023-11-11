import React from 'react'
import "./EnConstruccion.css" 
import { Footer } from '../../layout/footer/Footer'

export const EnConstruccion = () => {
  return (
    <div className='construccion-container'>
        <h1>Sitio en construccion</h1>
        <div className='img-item'>
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1699587301/Ecommerce%20Tienda%20de%20Videojuegos/construccion.png" alt="sitio-en-construccion" />
        </div>
        <Footer />
    </div>
  )
}
