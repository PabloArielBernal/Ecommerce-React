
import "./Navbar.css"
import { CartWidget } from "../../common/cartWidget/CartWidget"
import {Button, TextField, Typography} from "@mui/material";

export const Navbar = () =>{
    return <nav className="navbar">
        <img src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1696190816/Ecommerce%20Tienda%20de%20Videojuegos/logo3.png" alt="logo" width="150"/>
        <ul>
            <li><Button variant="contained">todos</Button></li>
            <li><Button variant="contained">consolas</Button></li>
            <li><Button variant="contained">accesorios</Button></li>
            <li><Button variant="contained">juegos de ps2</Button></li>
            <li><Button variant="contained">juegos de ps3</Button></li>
            <li><Button variant="contained">contacto</Button></li>
        </ul>
        <CartWidget />
    </nav>
}