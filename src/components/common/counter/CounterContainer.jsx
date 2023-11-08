import { useState } from "react";
import { Counter } from "./Counter";
import Alert from '@mui/material/Alert';

export const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);
  const [showAlert, setShowAlert] = useState(false);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1700);
    }
  };

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
  };

  const restablecer = () => {
    setContador(1);
  };

  return (
    <div>
      <Counter
        sumar={sumar}
        restar={restar}
        restablecer={restablecer}
        contador={contador}
        onAdd={onAdd}
      />
      {showAlert && (
        <Alert variant="filled" severity="error">
        Cantidad maxima
      </Alert>
      )}
    </div>
  );
};
