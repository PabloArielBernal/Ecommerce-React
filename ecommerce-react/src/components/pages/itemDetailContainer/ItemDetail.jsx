import React from "react";
import { CounterContainer } from "../../common/counter/CounterContainer";
import "./ItemDetail.css"

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div className="detail-container">
      <p className="detail-title">{productSelected.title}</p>
      <div className="detail-items">
        <img src={productSelected.img} alt={productSelected.title} height={"500px"} />
        <div className="columns">
          <p className="detail-description">{productSelected.description}</p>
          <p className="detail-price">$ {productSelected.price}</p>
          <CounterContainer stock={productSelected.stock} onAdd={onAdd} style={{ backgroundColor: 'red', padding: '10px' }}/>
        </div>
      </div>

      
    </div>
  );
};
