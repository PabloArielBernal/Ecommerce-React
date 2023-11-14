import React, { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CheckoutFormik.css";
import { Footer } from "../../layout/footer/Footer";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import { Link } from "react-router-dom";

export const CheckoutFormik = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const total = getTotalPrice();

  const [orderId, setOrderId] = useState(null);

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", apellido: "", telefono: "", email: "" },

    onSubmit: (data) => {
      let order = {
        buyer: { data },
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

      clearCart();
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(4, "Debe tener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      apellido: Yup.string().required("Este campo es obligatorio"),
      telefono: Yup.number()
      .typeError("Solo se permiten números").required(
        "Este campo es obligatorio"
      ),
      email: Yup.string()
        .email("Este mail no es válido")
        .required("Este campo es obligatorio"),
    }),
  });

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
        <div className="checkout-container">
          <p className="checkout-title">Completa tus datos</p>
          <form onSubmit={handleSubmit}>
            <div className="data">
              <TextField
                label="Nombre"
                variant="outlined"
                name="nombre"
                onChange={handleChange}
                error={errors.nombre ? true : false}
                helperText={errors.nombre}
              />
              <TextField
                label="Apellido"
                variant="outlined"
                name="apellido"
                onChange={handleChange}
                error={errors.apellido ? true : false}
                helperText={errors.apellido}
              />
              <TextField
                label="Telefono"
                variant="outlined"
                name="telefono"
                onChange={handleChange}
                error={errors.telefono ? true : false}
                helperText={errors.telefono}
              />
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
            </div>
            <div className="botones">
              <Button variant="contained" color="secondary" type="submit">
                Enviar
              </Button>
              <Button variant="contained" type="button">
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      )}
      <Footer />
    </>
  );
};
