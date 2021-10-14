import FormularioJ from "components/FormularioJ"
import { useState } from "react";
import ModalCambios from "components/ModalCambios";
const NuevaVenta = () => {
    const [showmodal, setShowmodal] = useState(false);
    const [savechanges,setSaveChanges] = useState(false);

    return(
        <>
        <h1 className="cuerpo_central__Ventas-tabla-titulo">Nueva Venta</h1>
        <div className="tabla">
        <h1 className="TituloNuevaVenta">ID</h1>
        <FormularioJ estilo="FormularioNuevaVenta" campo1="Fecha Venta" campo2="Cantidad Venta" campo3="Documento Cliente" campo4="Nombre Encargado" campo5="Valor Total" campo6="Estado"  setShowmodal={setShowmodal} setSaveChanges={setSaveChanges}/>
        </div>
        {showmodal && 
        <ModalCambios setSaveChanges={setSaveChanges} savechanges={savechanges}/>
        }
        </>
    )
}

export default NuevaVenta;