import 'styles/View.css';
import BotonesEdición from 'components/BotonesEdición';
/* import NavBarView from 'components/NavBarView'; */
import CampoAEditar from 'components/CampoAEditar';
import ListaDesplegable from 'components/ListaEdición';
import DescripView from 'components/DescripView';
import CampoID from 'components/CampoID';
import CamposAdd from 'components/CamposAdd';


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