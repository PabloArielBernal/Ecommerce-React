import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import Spinner from "../../common/spinner/Spinner";
import { Footer } from "../../layout/footer/Footer";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect( ()=>{
      const productosFiltrados = products.filter( product => product.category === categoryName )

      const tarea = new Promise((resolve, reject) => {
        setTimeout( () => {
          resolve( categoryName ? productosFiltrados : products);
          reject("Lo siento, algo salió mal");
        }, 1000);       
      });

      tarea.then((res) => setItems(res)).catch((error) => console.log(error));
    }, [categoryName] );

    /* //If con return temprano
    if(items.length === 0){
      return <Spinner />
    } */



  return (
    <>
      {
        items.length === 0 ? ( <Spinner />) : (<ItemList items={items} />)
      }
      {
        items.length !== 0 && <Footer />
      }
    </>
  );
};
