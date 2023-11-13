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

  return (
    <div>
      <Counter
        sumar={sumar}
        restar={restar}
        contador={contador}
        onAdd={onAdd}
      />
      {showAlert && (
        <Alert variant="filled" severity="error" style={{width:"38%"
        ,margin:"10px"}}>
        Cantidad maxima
      </Alert>
      )}
    </div>
  );
};
