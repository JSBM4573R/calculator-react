import React from "react";
import '../css/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };

  return (
    <div
      // Se crea una plantilla literal o template Literal con Back Tips
      // Se crea una funcion con operador terniario en donde se genera una validacion. 
      // Si es true coloca la clase 'operador' si no retornara '' y no colocara ninguna clase.
      // Para eliminar el espacio en el html usamos trimEnd al final de la template literal para eliminar esos espacios vacios al final. 
      className={`boton__contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
      {/* la propiedad children recibe lo que contenga dentro de las etiquetas del componente */}
      {props.children}
    </div>
  );
}

export default Boton;