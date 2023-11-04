import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  // Funcion para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Funcion para eliminar un producto
  const deleteProductById = (id) => {
    console.log("el id es: ", id);
    let newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  // Obtener el precio total del carrito
  const getTotalPrice = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };

  //Obtener la cantidad de elementos
  const getTotalQuantity = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity;
    }, 0);

    return total;
  };

  let data = {
    cart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
