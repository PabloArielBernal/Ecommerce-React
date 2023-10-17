import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../../productsMock";

export const ItemListContainer = ({ nombre, edad, x }) => {
  const [items, setItems] = useState([]);



    useEffect( ()=>{

      const tarea = new Promise((resolve, reject) => {
        resolve(products);
        reject("Lo siento, algo salió mal");
      });
    
      tarea
        .then((x) => setItems(x))
        .catch((y) => console.log("reject: ", y));

    }, [] )

    console.log(items)

  return <ItemList items={items}/>;
};
