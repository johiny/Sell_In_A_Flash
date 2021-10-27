import 'styles/View.css';
import BotonesEdición from 'Componentes/BotonesEdición';
import NavBarView from 'Componentes/NavBarView';
import CampoAEditar from 'Componentes/CampoAEditar';
import ListaDesplegable from 'Componentes/ListaEdición';
import DescripView from 'Componentes/DescripView';
import CampoID from 'Componentes/CampoID';
import CamposAdd from 'Componentes/CamposAdd';


function ViewRegister(){
    return(
        <div>
          <CampoAEditar/>
          <CampoAEditar/>
          <ListaDesplegable/>
          <DescripView/>
          <CampoID/>
          <CamposAdd/>
          <CamposAdd/>
          <CamposAdd/>
          <BotonesEdición Nombre='Editar'/>
          <BotonesEdición Nombre='Guardar'/>
    </div>

    );
}

export default ViewRegister;