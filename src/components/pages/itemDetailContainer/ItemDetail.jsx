import React from "react";
import { CounterContainer } from "../../common/counter/CounterContainer";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { Footer } from "../../layout/footer/Footer";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <div className="detail-container">
      <p className="detail-title">{productSelected.title}</p>
      <div className="detail-items">
        <img
          src={productSelected.img}
          alt={productSelected.title}
          height={"500px"}
        />
        <p className="detail-description">{productSelected.description}</p>
      </div>
        <p className="detail-price">Precio: ${productSelected.price}</p>

      <div className="contadores">
        {showCounter ? (
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
            style={{ backgroundColor: "red", padding: "10px" }}
          />
        ) : (
          <div>
            <Link className="boton-carrito" to="/cart">
              Ir a mi carrito
            </Link>
          </div>
        )}

        {initial && (
          <p className="mensaje">Ya tienes {initial} unidades en el carrito</p>
        )}
      </div>
      <Footer />
    </div>
  );
};
