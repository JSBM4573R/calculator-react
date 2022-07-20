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
      </div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
     </div>
    </div>
  );
}

export default App;
