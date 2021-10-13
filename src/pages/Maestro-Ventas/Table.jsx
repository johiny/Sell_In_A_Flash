import Buscador from "components/Buscador";
import Tabla from "components/Tabla";
import { useEffect,useState } from "react";
import ventas from "Ventas_test.json"
import ModalCambios from "components/ModalCambios";
const TableIndex = () => {
    const [listaVentas, setListaVentas] = useState([]);
    const [showmodal, setShowmodal] = useState(false);
    const [savechanges,setSaveChanges] = useState(false);
    
    useEffect(() => {
        setListaVentas(ventas)
    },[])

    
    return(
        <>
        <h1 className="cuerpo_central__Ventas-tabla-titulo">Ventas</h1>
        <Buscador estilo="Buscador_Tabla_Ventas"/>
        <Tabla ventasbackend={listaVentas} setSaveChanges={setSaveChanges} setShowmodal={setShowmodal}/>
        {showmodal && 
        <ModalCambios setSaveChanges={setSaveChanges} savechanges={savechanges}/>
        }
        
        </>
    )
}

export default TableIndex;
