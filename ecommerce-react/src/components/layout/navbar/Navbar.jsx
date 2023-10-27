import "./Navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Button, TextField, Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
      <nav className="navbar">
        <Link to="/">
          <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1696190816/Ecommerce%20Tienda%20de%20Videojuegos/logo3.png" alt="logo" width="150"/>
        </Link>
        <ul className="categories">
          <Link to="/">
            <li><Button variant="contained">todos</Button></li>
          </Link>
          <Link to="/category/consolas">
            <li><Button variant="contained">consolas</Button></li>
          </Link>
          <Link to="/category/accesorios">
            <li><Button variant="contained">accesorios</Button></li>
          </Link>
          <Link to="/category/juegos-ps2">
            <li><Button variant="contained">juegos de ps2</Button></li>
          </Link>
          <Link to="/category/juegos-ps3">
            <li><Button variant="contained">juegos de ps3</Button></li>
          </Link>
          <Link to="/category/contacto">
            <li><Button variant="contained">contacto</Button></li>
          </Link>

           <CartWidget />
        </ul>
      </nav>
  );
};
