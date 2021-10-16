import {Link} from "react-router-dom"
const VentaRow = (props) => {
    return(
<tr>
    <td><Link to={`/Maestro-Ventas/${props.venta.ID}`}>1</Link></td>
    <td className="campo"><input defaultValue={props.venta.Fecha}></input></td>
    <td className="campo"><input defaultValue={props.venta.Cantidad}></input></td>
    <td className="campo"><input defaultValue={props.venta.Cliente}></input></td>
    <td className="campo"><input defaultValue={props.venta.Encargado}></input></td>
    <td className="campo"><input defaultValue={props.venta.Valor_Total}></input></td>
    <td><select defaultValue ={props.venta.Estado} onChange={() => { props.setSaveChanges(true)
                        props.setShowmodal(true)}} name="estado" id="tabla__estado_selector" className="campo">
                        <option value="Proceso">En Proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
    </select></td>
    <td><img className="tabla__trashcan" src={props.ico}></img></td>
    
</tr>
    )
}

export default VentaRow;