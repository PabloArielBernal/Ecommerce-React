import React from "react";
import { CounterContainer } from "../../common/counter/CounterContainer";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

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
        <div className="columns">
          <p className="detail-description">{productSelected.description}</p>
          <p className="detail-price">$ {productSelected.price}</p>

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

          {
            initial && <p className="mensaje">Ya tienes {initial} unidades en el carrito</p>

          }
        </div>
      </div>
    </div>
  );
};
