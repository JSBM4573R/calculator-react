import './App.css';
import jsbmLogo from './img/logo-jsbm-medium.png';
import Boton from './components/Boton';

function App() {
  return (
    <div className='App'>
     <div className='jsbm__logo__contenedor'>
      <img 
        src={jsbmLogo}
        className='jsbm__logo'
        alt='Logo de JSBM' />
     </div>
     <div className='contenedor__calculadora'>
      <div className='fila'>
        <Boton>1</Boton>
        <Boton>2</Boton>
        <Boton>3</Boton>
        <Boton>+</Boton>
      </div>
      <div className='fila'>
        <Boton>4</Boton>
        <Boton>5</Boton>
        <Boton>6</Boton>
        <Boton>-</Boton>
      </div>
      <div className='fila'>
        <Boton>7</Boton>
        <Boton>8</Boton>
        <Boton>9</Boton>
        <Boton>*</Boton>
      </div>
      <div className='fila'>
        <Boton>=</Boton>
        <Boton>0</Boton>
        <Boton>.</Boton>
        <Boton>/</Boton>
      </div>
      <div className='fila'></div>
     </div>
    </div>
  );
}

export default App;
