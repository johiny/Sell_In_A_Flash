
import logo from './Imagenes/logo.png';
import SinFoto from './Imagenes/SinFoto.png';
import './Styles/App.css';
import './Styles/App2.css';
import DatosInput from './Componentes/DatosFormulario';
import BotonesRegistro from './Componentes/Botones';
import NavBars from './Componentes/NavBars';
import DatosFormulario from './Componentes/DatosFormulario';
import ListaDesplegable from './Componentes/ListaDesplegable';
import CampoDescrip from './Componentes/CampoDescrip';
import Tabla from './Componentes/Tabla';
import NavMostrar from './Componentes/NavMostrar';
import NavPages from './Componentes/NavPages';
import Botones from './Componentes/Botones';
import NavBuscar from './Componentes/NavBuscar';
import FotoProducto from './Componentes/FotoProducto';

function App() {
  return (
    <div className="App">
      <NavBars/>
      <DatosFormulario Etiqueta='ID Producto'/>
      <DatosFormulario Etiqueta='Precio'/>
      <ListaDesplegable Etiqueta='Status'/>
      <CampoDescrip Etiqueta='Descripción'/>
      <Botones/>
      <FotoProducto Imagen={SinFoto}/>
      <NavBuscar Etiqueta='Buscar'/>
      <Tabla Campo1='ID Producto'Campo2='Precio' Campo3='Status' Campo4='Descripción'/>
      <NavMostrar Texto1='Mostrar' Texto2='entradas'/>
      <NavPages/>
  </div>
  );
}

export default App;
