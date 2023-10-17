

export const Counter = ( {sumar, restar, contador, restablecer, nombre, setNombre} ) => {

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <button onClick={sumar}>sumar</button><br />
      <h4 style={{padding:8, border: "3px solid black", fontFamily:"cursive", borderRadius:7, fontSize: "200px"}}>{contador}</h4>
      <button onClick={restar}>restar</button><br />
      <button onClick={restablecer}>restablecer</button>
      <h4>{nombre}</h4>
      <button onClick={()=>setNombre("Agregado")}>Al carrito</button>
    </div>
  )
}
