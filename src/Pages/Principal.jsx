import NavBars from '../Componentes/NavBars';
import DatosFormulario from '../Componentes/DatosFormulario';
import ListaDesplegable from '../Componentes/ListaDesplegable';
import CampoDescrip from '../Componentes/CampoDescrip';
import Botones from '../Componentes/Botones';
import FotoProducto from '../Componentes/FotoProducto';
import NavBuscar from '../Componentes/NavBuscar';
import Tabla from '../Componentes/Tabla';
import NavMostrar from '../Componentes/NavMostrar';
import NavPages from '../Componentes/NavPages';
import SinFoto from '../Imagenes/SinFoto.png';


function Principal(){
  return(
    <div>
      <NavBars/>
      <DatosFormulario Etiqueta='ID Producto'/>
      <DatosFormulario Etiqueta='Precio'/>
      <ListaDesplegable Etiqueta='Status'/>
      <CampoDescrip Etiqueta='Descripción'/>
      <Botones Nombre1='Guardar' Nombre2='Ver'/>
      <FotoProducto Imagen={SinFoto}/>
      <NavBuscar Etiqueta='Buscar'/>
      <Tabla Campo1='ID Producto'Campo2='Precio' Campo3='Status' Campo4='Descripción'/>
      <NavMostrar Texto1='Mostrar' Texto2='entradas'/>
      <NavPages/>
    </div>
  );
}


export default Principal;

