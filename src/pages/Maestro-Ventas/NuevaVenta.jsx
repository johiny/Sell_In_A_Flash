import FormularioJ from "components/FormularioJ"
import { useEffect, useState } from "react";
import ModalNuevaVenta from "components/ModalNuevaVenta"
import database from "Ventas_test.json"

const NuevaVenta = () => {    
    const [showmodal, setShowmodal] = useState(false);
    const [savechanges,setSaveChanges] = useState(true);
    
    const [fecha,setFecha] = useState();
    const [cantidad,setCantidad] = useState();
    const [cliente,setCliente] = useState();
    const [encargado,setEncargado] = useState();
    const [valortotal,setValorTotal] = useState();
    const [estado,setEstado] = useState();
    const [ventas,setVentas] = useState(database)
    
    // borrar esto es solo para ver si se estan guardando la venta
    useEffect(() => {
        console.log(ventas)
    },[ventas]);

    return(
        <>
        <h1 className="cuerpo_central__Ventas-tabla-titulo">Nueva Venta</h1>
        <div className="tabla">
        <h1 className="TituloNuevaVenta">ID</h1>
        <FormularioJ estilo="FormularioNuevaVenta" campo1="Fecha Venta" campo2="Cantidad Venta" 
        campo3="Documento Cliente" campo4="Nombre Encargado" campo5="Valor Total" 
        campo6="Estado"  setShowmodal={setShowmodal} setSaveChanges={setSaveChanges}
        fecha={fecha} cantidad={cantidad} cliente={cliente} encargado={encargado}
         valortotal={valortotal} estado={estado} setFecha={setFecha} setCantidad={setCantidad}
         setCliente={setCliente} setEncargado={setEncargado} setValorTotal={setValorTotal}
         setEstado={setEstado}/>
        </div>
        {showmodal && 
        <ModalNuevaVenta fecha={fecha} cantidad={cantidad} cliente={cliente} encargado={encargado}
        valortotal={valortotal} estado={estado} setSaveChanges={setSaveChanges} 
        savechanges={savechanges} ventas={ventas} setVentas={setVentas}/>
        }
        </>
    )
}

export default NuevaVenta;