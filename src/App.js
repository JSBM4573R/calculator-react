import './App.css';
import jsbmLogo from './img/logo-jsbm-medium.png';

function App() {
  return (
    <div className='App'>
     <div className='jsbm__logo__contenedor'>
      <img 
        src={jsbmLogo}
        className='jsbm__logo'
        alt='Logo de JSBM' />
     </div>
    </div>
  );
}

export default App;
