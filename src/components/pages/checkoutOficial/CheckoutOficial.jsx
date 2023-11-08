import { useContext, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import { database } from "../../../firebaseConfig";
import "./CheckoutOficial.css";
import { Link } from "react-router-dom";

export const CheckoutOficial = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(database, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
        updateDoc(doc(database, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart()
  };

  return (
    <>
      {orderId ? (
        <div className="gracias-container">
          <h1>Tu pedido a sido realizado con éxito</h1>
          <Link className="link" to="/">
            Seguir comprando
          </Link>
          <div className="gracias-item">
            <p id="msj1">¡Gracias por su compra!</p>
            <img
              src="https://res.cloudinary.com/drmbbxdtf/image/upload/v1699246498/Ecommerce%20Tienda%20de%20Videojuegos/order-confirmed.svg"
              alt="fondo-shop"
            />
            <p id="msj2">Su N° de comprobante es: {orderId}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingresa tu telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingresa tu email"
            name="email"
            onChange={handleChange}
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </>
  );
};
