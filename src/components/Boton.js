import React from "react";

function Boton(props) {
  return (
    <div
      // Se crea una plantilla literal o template Literal con Back Tips
      // Se crea una funcion con operador terniario en donde se genera una validacion. 
      // Si es true coloca la clase 'operador' si no retornara null y no hace nada. 
      className={`boton__contenedor ${esOperador(props.children) ? 'operador' : null}`}>
      {/* la propiedad children recibe lo que contenga dentro de las etiquetas del componente */}
      {props.children}
    </div>
  );
}

export default Boton;