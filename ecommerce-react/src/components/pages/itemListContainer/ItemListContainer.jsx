import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

    const { categoryName } = useParams();
    console.log(categoryName ? "estoy intentando filtrar" : "Estoy en el home")

    useEffect( ()=>{
      const productosFiltrados = products.filter( product => product.category === categoryName )

      const tarea = new Promise((resolve, reject) => {
        resolve( categoryName ? productosFiltrados : products);
        reject("Lo siento, algo salió mal");
      });
    
      tarea
        .then((x) => setItems(x))
        .catch((y) => console.log("reject: ", y));

    }, [categoryName] )

    console.log(items)

  return <ItemList items={items}/>;
};
