import {Link} from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import trashcan from "media/delete.png"
import pencil from "media/pencil.svg"
import cross from "media/cancel.svg"
import save from "media/save.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VentaRow = (props) => {
    const modal = () => {toast.success('✔️Venta Guardada!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })};
    const [editVenta,setEditVenta] = useState({
        fecha: props.venta.Fecha,
        cantidad: props.venta.Cantidad,
        cliente : props.venta.Cliente,
        encargado : props.venta.Encargado,
        valor_total : props.venta.Valor_Total,
        estado : props.venta.estado
    })
    const [editActivate,setEditActivate] = useState(false);

    const editSubmit = () => {
        console.log(editVenta)
        setEditActivate(false)
        modal();
    } 
    


    return(
<tr>
    <td><Link to={`/Maestro-Ventas/${props.venta.ID}`}>1</Link></td>

    {editActivate ? <td className="campo"><input name="fecha" value={editVenta.fecha} onChange={e=>setEditVenta({...editVenta,fecha : e.target.value})}></input></td> : 
    <td className="campo">{props.venta.Fecha}</td>}

    {editActivate ? <td className="campo"><input name="cantidad" value={editVenta.cantidad} onChange={e=>setEditVenta({...editVenta,cantidad : e.target.value})}></input></td> : 
    <td className="campo">{props.venta.Cantidad}</td>}

    {editActivate ? <td className="campo"><input name="cliente" value={editVenta.cliente} onChange={e=>setEditVenta({...editVenta,cliente : e.target.value})}></input></td> :
    <td className="campo">{props.venta.Cliente}</td>}

    {editActivate ? <td className="campo"><input name="encargado" value={editVenta.encargado} onChange={e=>setEditVenta({...editVenta,encargado : e.target.value})}></input></td> :
    <td className="campo">{props.venta.Encargado}</td>}

    {editActivate ? <td className="campo"><input name="valor_total" value={editVenta.valor_total} onChange={e=>setEditVenta({...editVenta,valor_total : e.target.value})}></input></td> :
    <td className="campo">{props.venta.Valor_Total}</td>}

    {editActivate ? <td><select value={editVenta.estado} name="estado" id="tabla__estado_selector" className="campo" onChange={e=>setEditVenta({...editVenta, estado: e.target.value})}>
                        <option value="Proceso">En Proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
    </select></td> :
    <td>{props.venta.Estado}</td>}

    {editActivate ? <td><input type="image" form="tabla-form" className="guardar_cambios"  src={save} onClick={editSubmit}></input><img onClick={() => setEditActivate(!editActivate)} className="tabla__trashcan" src={cross}></img></td>:
    <td><img onClick={() => setEditActivate(!editActivate)} className="tabla__trashcan" src={pencil}></img><img className="tabla__trashcan" src={trashcan}></img></td>}
   </tr>
    )
}

export default VentaRow;