import "./Counter.css"

export const Counter = ( {sumar, restar, contador, restablecer, onAdd} ) => {

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={sumar}>sumar</button>
      <h4 className="counter"> {contador} </h4>
      <button className="counter-button" onClick={restar}>restar</button>
      <button className="counter-button" onClick={restablecer}>restablecer</button>
      <button className="counter-button" onClick={ ()=> onAdd(contador) }>Agregar al carrito</button>
    </div>
  )
}
