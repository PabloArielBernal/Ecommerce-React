import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import "./Contacto.css"

export const Contacto = () => {
  return (
    <div className='contacto-container'>
      <div className='contacto-items'>
        <h1 className='contacto-titulo'>Nuestros canales de contacto</h1>
        <p className='texto-datos'><img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698202425/Ecommerce%20Tienda%20de%20Videojuegos/mail.png" alt="mail-logo" /> E-mail: hoyendiaelmundo@gmail.com</p>
        <p className='texto-datos'><img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698202964/Ecommerce%20Tienda%20de%20Videojuegos/phone-logo.png" alt="tel-logo" /> Tel: 0800-123-1234</p>
        <p className='texto-datos'><img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698202752/Ecommerce%20Tienda%20de%20Videojuegos/whatsapp.png" alt="wsp-logo" /> Whatsapp: 11-1234-1234</p>
        <h2 className='redes-titulo'>Encontranos en nuestras Redes Sociales</h2>
        <li className='redes'>
          <a className='red' href="https://www.facebook.com/" target="_blank"><img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698204639/Ecommerce%20Tienda%20de%20Videojuegos/facebook.png" alt="facebook-logo" /></a>
          <a className='red' href="https://www.instagram.com/" target="_blank"><img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698204328/Ecommerce%20Tienda%20de%20Videojuegos/instagram.png" alt="instagram-logo" /></a>
          <a className='red' href="https://twitter.com/" target="_blank"><img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698204523/Ecommerce%20Tienda%20de%20Videojuegos/twitter.png" alt="twitter-logo" /></a>
          <a className='red' href="https://www.tiktok.com/" target="_blank"><img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698204627/Ecommerce%20Tienda%20de%20Videojuegos/tik-tok.png" alt="tiktok-logo" /></a>
          <a className='red' href="https://www.youtube.com/" target="_blank"><img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698204702/Ecommerce%20Tienda%20de%20Videojuegos/youtube.png" alt="youtube-logo" /></a>
        </li>
        <p className='playstation'>Importador oficial de PlayStation</p>
        <ul className='lista-playstation'>
          <li>
            <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698198673/Ecommerce%20Tienda%20de%20Videojuegos/ps1-logo.png" alt="logo-ps1"/></li>
          <li>
            <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698198671/Ecommerce%20Tienda%20de%20Videojuegos/ps2-logo.png" alt="logo-ps2" /></li>
          <li>
            <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698198641/Ecommerce%20Tienda%20de%20Videojuegos/ps3-logo.svg" alt="logo-ps3" /></li>
          <li>
            <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698198603/Ecommerce%20Tienda%20de%20Videojuegos/ps4-logo.png" alt="logo-ps4" /></li>
          <li>
            <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698198627/Ecommerce%20Tienda%20de%20Videojuegos/ps5-logo.png" alt="logo-ps5" /></li>
          <li>
            <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698198388/Ecommerce%20Tienda%20de%20Videojuegos/ps-plus-logo.webp" alt="ps-plus" /></li>
          <li>
            <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698200283/Ecommerce%20Tienda%20de%20Videojuegos/playstation-network.png" alt="ps-network" /></li>
        </ul>
      </div>  
    </div>
  )
}
