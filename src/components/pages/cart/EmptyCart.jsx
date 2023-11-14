import React from "react";
import "./EmptyCart.css";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <div className="empty-cart-item">
        <img
          src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1699946646/Ecommerce%20Tienda%20de%20Videojuegos/empty-cart.svg"
          alt="carrito-vacio"
        />
        <h5>Tu carrito está vacio</h5>
        <Link to="/">
          <button>Todos los productos</button>
        </Link>
      </div>
    </div>
  );
};
