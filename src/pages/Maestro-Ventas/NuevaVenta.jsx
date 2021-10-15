import FormularioJ from "components/FormularioJ"
import { useEffect, useState, useRef } from "react";
import ModalNuevaVenta from "components/ModalNuevaVenta"
import database from "Ventas_test.json"

const NuevaVenta = () => {    
    const [showmodal, setShowmodal] = useState(false);
    const [savechanges,setSaveChanges] = useState(true);
    const [ventas,setVentas] = useState(database)

    const form = useRef(null);
    const submitto = (e) => {
        e.preventDefault();
        const ventanueva = {};
        const formdata = new FormData(form.current);
        formdata.forEach((value,key) => {
            ventanueva[key] = value;
        })
        setSaveChanges(false)
        console.log(ventanueva)
        
    }
    // borrar esto es solo para ver si se estan guardando la venta
    useEffect(() => {
        console.log(ventas)
    },[ventas]);

    return(
        <>
        <h1 className="cuerpo_central__Ventas-tabla-titulo">Nueva Venta</h1>
        <div className="tabla">
        <h1 className="TituloNuevaVenta">ID</h1>
        <FormularioJ form={form} submitto={submitto} estilo="FormularioNuevaVenta" campo1="Fecha Venta" campo2="Cantidad Venta" 
        campo3="Documento Cliente" campo4="Nombre Encargado" campo5="Valor Total" 
        campo6="Estado"  setShowmodal={setShowmodal} setSaveChanges={setSaveChanges}/>
        </div>
        {showmodal && 
        <ModalNuevaVenta
        savechanges={savechanges}/>
        }
        </>
    )
}

export default NuevaVenta;