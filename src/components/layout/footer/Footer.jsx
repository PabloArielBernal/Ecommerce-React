import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-container">
        <div id="a">
            <li>CONTACTO</li>
            <p>Lunes a Sabado de 9 hs a 18 hs</p>
            <p><WhatsAppIcon />  11-1234-1234</p>
        </div>
        <div id="a">
        <li>SERVICIO TECNICO</li>
            <p>Martes a Viernes de 10 hs a 18 hs</p>
            <p>321 Calle Inventada - Buenos Aires</p>
        </div>
        <div className="medios-de-pago" id="a">
        <li>MEDIOS DE PAGO</li>
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698106266/Ecommerce%20Tienda%20de%20Videojuegos/medios%20de%20pago/visa_2x_jrm4mz.png" alt="visa" />
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698106277/Ecommerce%20Tienda%20de%20Videojuegos/medios%20de%20pago/mastercard_2x_jo72ob.png" alt="mastercard" />
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698106285/Ecommerce%20Tienda%20de%20Videojuegos/medios%20de%20pago/amex_2x_sev6hw.png" alt="american-express" />
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698106307/Ecommerce%20Tienda%20de%20Videojuegos/medios%20de%20pago/tarjeta-naranja_2x_cnpyih.png" alt="tarjeta-naranja" />
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698106303/Ecommerce%20Tienda%20de%20Videojuegos/medios%20de%20pago/cabal_2x_sdlndn.png" alt="cabal" />
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698106299/Ecommerce%20Tienda%20de%20Videojuegos/medios%20de%20pago/diners_2x_ktthhj.png" alt="diners-club" />
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698106291/Ecommerce%20Tienda%20de%20Videojuegos/medios%20de%20pago/banelco_2x_r79alj.png" alt="banelco" />
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698106311/Ecommerce%20Tienda%20de%20Videojuegos/medios%20de%20pago/tarjeta-shopping_2x_svzk3j.png" alt="tarjeta-shopping" />
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698106317/Ecommerce%20Tienda%20de%20Videojuegos/medios%20de%20pago/mercadopago_2x_xvmdcp.png" alt="mercado-pago" />
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698106321/Ecommerce%20Tienda%20de%20Videojuegos/medios%20de%20pago/pagofacil_2x_y4ja40.png" alt="pago-facil" />
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698106338/Ecommerce%20Tienda%20de%20Videojuegos/medios%20de%20pago/rapipago_2x_pv8obs.png" alt="rapipago" />
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1698109187/Ecommerce%20Tienda%20de%20Videojuegos/medios%20de%20pago/logo-uala-fintec-argentina-6-1024x576_j9dfe9.webp" alt="uala" />
        
        </div>
      </ul>
      <ul className="redes-footer">
        <a className="red" href="https:/www.facebook.com" target="_blank"><FacebookOutlinedIcon /></a>
        <a className="red" href="https:/www.instagram.com" target="_blank"><InstagramIcon /></a>
        <a className="red" href="https:/www.twitter.com" target="_blank"><TwitterIcon /></a>
        <a className="red" href="https:/www.youtube.com" target="_blank"><YouTubeIcon /></a>
      </ul>
      <p className="copyright">Pablo Ariel Bernal. Copyright © 2023 Todos los derechos son reservados.</p>
      <a href="#" className="subir"><KeyboardArrowUpIcon /></a>
    </div>
  );
};
