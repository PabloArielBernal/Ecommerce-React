
import { Link } from "react-router-dom";
import React from "react";
import "./ProductCard.css"

export const ProductCard = ({ item }) => {
  return (
    <div className="grid-item">
      <img src={item.img} alt={item.title}/>
      <p className="item-title">{item.title}</p>
      <p className="item-price" style={{ padding:"10px"}}>${item.price}</p>
        <Link to={`./itemDetail/${item.id}`}>
          <button>Ver detalle</button>
        </Link>
    </div>
  );
};
