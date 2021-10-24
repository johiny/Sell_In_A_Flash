import VentaRow from "components/VentaRow.jsx"
import CheckMark from "media/check-mark.svg"
import { useEffect, useState } from "react/cjs/react.development"
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
                    </tr>
                </thead>
                <tbody>    
                {ventasbackend.map((venta) => {
                    return (
                    <tr>
                    <td>{venta.ID}</td>
                    <td contenteditable class="campo">{venta.Fecha}</td>
                    <td contenteditable class="campo">{venta.Cantidad}</td>
                    <td contenteditable class="campo">{venta.Cliente}</td>
                    <td contenteditable class="campo">{venta.Encargado}</td>
                    <td contenteditable class="campo">{venta.Valor_Total}</td>
                    <td><select onChange={() => { setSaveChanges(true)
                        setShowmodal(true)}} name="estado" id="tabla__estado_selector" class="campo">
                        <option defaultvalue ={venta.Estado} selected disabled hidden>{venta.Estado}</option>
                        <option value="Proceso">En Proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                    </select></td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
    )    
}    

export default Tabla;