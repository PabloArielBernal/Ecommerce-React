import React from "react";
import { CounterContainer } from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div style={{backgroundColor: "#002", padding:"200px", color:"white"}}>
        <img style={{border:"25px solid white"}} src={productSelected.img} alt={productSelected.title} height={"500px"} />
      <h2>{productSelected.title}</h2>
        <p>{productSelected.description}</p>
        <h1>$ {productSelected.price}</h1>
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />

      
    </div>
  );
};
