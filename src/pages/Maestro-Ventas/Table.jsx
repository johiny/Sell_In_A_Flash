import Buscador from "components/Buscador";
import Tabla from "components/Tabla";
const TableIndex = () => {
    return(
        <>
        <h1 className="cuerpo_central__Ventas-tabla-titulo">Ventas</h1>
        <Buscador estilo="Buscador_Tabla_Ventas"/>
        <Tabla/>
        </>
    )
}

export default TableIndex;