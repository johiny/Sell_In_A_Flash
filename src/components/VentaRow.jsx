import {Link} from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import trashcan from "media/delete.png"
import pencil from "media/pencil.svg"
import cross from "media/cancel.svg"
const VentaRow = (props) => {

    const [editActivate,setEditActivate] = useState(false);

    

    const edittrigger = () => {

        setEditActivate(!editActivate)
        console.log(editActivate)
    }

    return(
<tr>
    <td><Link to={`/Maestro-Ventas/${props.venta.ID}`}>1</Link></td>

    {editActivate ? <td className="campo"><input name="fecha" defaultValue={props.venta.Fecha}></input></td> : 
    <td className="campo">{props.venta.Fecha}</td>}

    {editActivate ? <td className="campo"><input name="cantidad" defaultValue={props.venta.Cantidad}></input></td> : 
    <td className="campo">{props.venta.Cantidad}</td>}

    {editActivate ? <td className="campo"><input name="cliente" defaultValue={props.venta.Cliente}></input></td> :
    <td className="campo">{props.venta.Cliente}</td>}

    {editActivate ? <td className="campo"><input name="encargado" defaultValue={props.venta.Encargado}></input></td> :
    <td className="campo">{props.venta.Encargado}</td>}

    {editActivate ? <td className="campo"><input name="valor_total" defaultValue={props.venta.Valor_Total}></input></td> :
    <td className="campo">{props.venta.Valor_Total}</td>}

    {editActivate ? <td><select defaultValue={props.venta.Estado} name="estado" id="tabla__estado_selector" className="campo">
                        <option value="Proceso">En Proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
    </select></td> :
    <td>{props.venta.Estado}</td>}

    <td><div>
    <img className="tabla__trashcan" src={editActivate ? cross : pencil} onClick={ () => edittrigger()}></img>
    <img className="tabla__trashcan" src={trashcan}></img>
    </div></td>
    
</tr>
    )
}

export default VentaRow;