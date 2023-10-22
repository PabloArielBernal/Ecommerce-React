
import { Link } from "react-router-dom";
import React from "react";

export const ProductCard = ({ item }) => {
  return (
    <div className="grid-item" style={{
        flex: "0 0 200px",
        border: "5px solid #efc900",
        backgroundColor: "#efc900",
        borderRadius: "4px"
      }}
    >
      <img src={item.img} alt={item.title} style={{ width: "200px"}} />
      <h2 style={{ textAlign: "center" }}>{item.title}</h2>
      <h4>{item.description}</h4>
      <h5>$ {item.price}</h5>
        <Link to={`./itemDetail/${item.id}`}>
          <button
            style={{ border: "2px solid white", color: "white", background: "black", borderRadius: "4px", padding: "4px" }}
              >Ver detalle
          </button>
        </Link>
    </div>
  );
};
