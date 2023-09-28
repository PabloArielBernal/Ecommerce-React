
import "./Navbar.css"
import { CartWidget } from "../../common/cartWidget/CartWidget"

export const Navbar = () =>{
    return <nav className="navbar">
        <h4></h4>
        <ul>
            <li>todos</li>
            <li>consolas</li>
            <li>accesorios</li>
            <li>juegos de ps2</li>
            <li>juegos de ps3</li>
        </ul>
        <CartWidget />
    </nav>
}