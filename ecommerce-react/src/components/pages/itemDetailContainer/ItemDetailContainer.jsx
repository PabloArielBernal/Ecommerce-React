import React, { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams()


  useEffect(() => {
    let producto = products.find((product) => product.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto)
    });

    getProduct.then((res) => setProductSelected(res)).catch((err) => console.log(err));
  }, [id]);

  const onAdd = ( cantidad )=>{
    let obj = {
      ...productSelected,
      quantity: cantidad
    }
    console.log("este es el producto que se agrega", obj)
  }

  console.log(productSelected)

  return <ItemDetail productSelected={productSelected} onAdd={onAdd}/>;
};
