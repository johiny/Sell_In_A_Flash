import DatosFormulario from 'components/DatosFormulario';
import ListaDesplegable from 'components/ListaDesplegable';
import CampoDescrip from 'components/CampoDescrip';
import Botones from 'components/Botones';
import FotoProducto from 'components/FotoProducto';
import NavBuscar from 'components/NavBuscar';
import Tabla2 from 'components/Tabla2';
import NavMostrar from 'components/NavMostrar';
import NavPages from 'components/NavPages';
import SinFoto from 'Imagenes/SinFoto.png';


function Principal(){
  return(
    <div>
      <DatosFormulario Etiqueta='ID Producto'/>
      <DatosFormulario Etiqueta='Precio'/>
      <ListaDesplegable Etiqueta='Status'/>
      <CampoDescrip Etiqueta='Descripción'/>
      <Botones Nombre1='Guardar' Nombre2='Ver'/>
      <FotoProducto Imagen={SinFoto}/>
      <NavBuscar Etiqueta='Buscar'/>
      <Tabla2 Campo1='ID Producto'Campo2='Precio' Campo3='Status' Campo4='Descripción'/>
      <NavMostrar Texto1='Mostrar' Texto2='entradas'/>
      <NavPages/>
    </div>
  );
}


export default Principal;

