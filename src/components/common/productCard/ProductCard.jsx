import { Link } from "react-router-dom";
import React from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";

export const ProductCard = ({ item, contador, onAdd }) => {
  return (
    <div className="grid-item">
      <img src={item.img} alt={item.title} />
      <p className="item-title">{item.title}</p>
      <p className="item-price" style={{ padding: "10px" }}>${item.price}</p>
      <div style={{ gap: "45px", display: "flex" }}>
        {
          item.stock > 0 ?
          <Link to={`./itemDetail/${item.id}`}>
          <button>Ver detalle</button>
        </Link> : <Button variant="contained" disabled>Sin stock</Button>
        }
        <Link to="/cart"><Button variant="contained" style={{textTransform:"inherit", fontSize:"14px", height:"30px", width:"89px"}}> Ir al carrito</Button></Link>
      </div>
    </div>
  );
};
