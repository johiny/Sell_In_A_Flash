import Buscador from "components/Buscador";
import Tabla from "components/Tabla";
import { useEffect,useState } from "react";
import ModalCambios from "components/ModalCambios";
import ventas from "Ventas_test.json"
const TableIndex = () => {
    const [listaVentas, setListaVentas] = useState([]);
    
    useEffect(() => {
        setListaVentas(ventas)
    },[])

    
    return(
        <>
        <h1 className="cuerpo_central__Ventas-tabla-titulo">Ventas</h1>
        <Buscador estilo="Buscador_Tabla_Ventas"/>
        <Tabla ventasbackend={listaVentas}/>
        </>
    )
}

export default TableIndex;
