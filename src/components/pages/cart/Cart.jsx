import { useContext } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = ()=>{
    Swal.fire({
      title: '¿Seguro que quieres vaciar el carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si, estoy seguro',
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Carrito vaciado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info')
      }
    })
  }

  return (
    <div className="cart-container">
      <p>Mi carrito</p>

      {cart.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.img} alt="{product.title}" />
          <h2>{product.title}</h2>
          <h2>${product.price}</h2>
          <h3>cantidad: {product.quantity}</h3>
          {<IconButton onClick={()=>deleteProductById(product.id)}>
            <DeleteIcon color="primary" />
          </IconButton>}
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <span className="total">El total a pagar es: ${total}</span>

          <div className="buttons">
            <Link to="/checkout">
              <Button variant="contained">Finalizar compra</Button>
            </Link>
            <Button variant="contained" onClick={clearCartWithAlert}>
              Vaciar carrito
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};