import { useState, useEffect } from "react";
import { Counter } from "./Counter";

export const CounterContainer = ({ stock }) => {
  console.log("Me monté");

  const [contador, setContador] = useState(1);
  const [nombre, setNombre] = useState("Agregar al carrito");

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  };

  const restablecer = () => {
    setContador(1);
  };

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Cantidad máxima");
    }
  };

  useEffect(() => {}, []);

  return (
    <Counter
      sumar={sumar}
      restar={restar}
      restablecer={restablecer}
      nombre={nombre}
      setNombre={setNombre}
    />
  );
};
