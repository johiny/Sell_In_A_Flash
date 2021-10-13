import Buscador from "components/Buscador";
import ModalJ from "components/ModalCambios";
import Tabla from "components/Tabla";
import { useEffect,useState } from "react";
import Cheakmark from "media/check-mark.svg";
import ventas from "Ventas_test.json"
const TableIndex = () => {
    const [listaVentas, setListaVentas] = useState([]);
    const [showmodal, setShowmodal] = useState(false);
    const [savechanges,setSaveChanges] = useState(true);
    useEffect(() => {
        setListaVentas(ventas)
        console.log(listaVentas)
    },[])
    
    return(
        <>
        <h1 className="cuerpo_central__Ventas-tabla-titulo">Ventas</h1>
        <Buscador estilo="Buscador_Tabla_Ventas"/>
        <Tabla ventasbackend={listaVentas} modal={showmodal}/>
        </>
    )
}

export default TableIndex;
{/* {savechanges ? <ModalJ estado={savechanges} titulo="Has hecho cambios" subtitulo="¿Quieres guardarlos?" tipo="pregunta" />  :
         <ModalJ titulo="¡Cambios Guardados" subtitulo="Correctamente!" img={Cheakmark} tipo="confirmación"/>} */}