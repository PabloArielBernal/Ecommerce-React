import { useState } from "react";
import { Counter } from "./Counter";

export const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Cantidad máxima");
    }
  };

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  };

  const restablecer = () => {
    setContador(1);
  };

  return (
    <Counter
      sumar={sumar}
      restar={restar}
      restablecer={restablecer}
      contador={contador}
      onAdd={onAdd}
    />
  );
};
