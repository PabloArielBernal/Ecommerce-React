import { colors } from "@mui/material";
import React from "react";
import { ProductCard } from "../../common/productCard/ProductCard";


export const ItemList = ({ items }) => {
  return (
    <section className="grid-container" style={{ display: "flex", flexWrap:"wrap", justifyContent:"center", gap:"100px", marginTop: "100px" }}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />
        
      

      })}
    </section>
  );
};

export default ItemList;
