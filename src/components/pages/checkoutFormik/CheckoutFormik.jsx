import React from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CheckoutFormik.css";

export const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", apellido: "", email: "" },

    onSubmit: (data) => {
      console.log("se envió");
      console.log(data);
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(4, "Debe tener al menos 4 caracteres")
        .max(20, "No debe superar los 20 caracteres"),
      apellido: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string()
        .email("Este mail no es válido")
        .required("Este campo es obligatorio"),
    }),
  });

  console.log(errors);

  return (
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
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
        </div>
        <div className="botones">
          <Button variant="contained" color="info" type="submit">
            Enviar
          </Button>
          <Button variant="contained" type="button">
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};
