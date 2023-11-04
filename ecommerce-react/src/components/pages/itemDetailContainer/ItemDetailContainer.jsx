import React, { useContext, useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2"

export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const [showCounter, setShowCounter] = useState (true)

  const { id } = useParams();

  const {addToCart, getQuantityById} = useContext(CartContext)

  let totalQuantity = getQuantityById(+id)


  useEffect(() => {
    let producto = products.find((product) => product.id === +id);

    const getProduct = new Promise((resolve) => {
      resolve(producto);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let item = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart( item )

    Swal.fire({
        position: 'top-right',
        icon: 'success',
        title: 'Se agregó el producto al carrito',
        showConfirmButton: false,
        timer: 1500
      })

    setShowCounter(false)
  };

  console.log(productSelected);

  return <ItemDetail showCounter={showCounter} productSelected={productSelected} onAdd={onAdd} initial={totalQuantity} />;
};
