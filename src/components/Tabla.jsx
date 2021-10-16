import VentaRow from "components/VentaRow.jsx"
import CheckMark from "media/check-mark.svg"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react/cjs/react.development"
import trashcan from "media/delete.png"
const Tabla = ({ventasbackend,setSaveChanges,setShowmodal}) => {

    useEffect(()=> {
        console.log(ventasbackend)
    },[ventasbackend])
    return(
        <div className="tabla">
            <table id="tabla">
                <thead>   
                    <tr>
                        <th id="tabla__id">ID</th>
                        <th id="tabla__date">Fecha</th>
                        <th id="tabla__cantidad">Cantidad</th>
                        <th id="tabla__cliente">Cliente</th>
                        <th id="tabla__encargado">Encargado</th>
                        <th id="tabla__valor-total">Valor Total</th>
                        <th id="tabla__estado">Estado</th>
                        <th id="tabla__delete"></th>
                    </tr>
                </thead>
                <tbody>    
                {ventasbackend.map((venta) => {
                    return (
                    <VentaRow key={nanoid()} setSaveChanges={setSaveChanges} setShowmodal={setShowmodal} venta={venta} ico={trashcan}/>
                    )
                })}
                </tbody>
            </table>
            </div>
    )    
}    

export default Tabla;