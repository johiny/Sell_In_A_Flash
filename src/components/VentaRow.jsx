import {Link} from "react-router-dom"
const VentaRow = (venta) => {
    return(
<tr>
    <td><Link to="/Maestro-Ventas/DetallesVenta">1</Link></td>
    <td contenteditable className="campo">{venta.Fecha}</td>
    <td contenteditable className="campo">{venta.Cantidad}</td>
    <td contenteditable className="campo">{venta.Cliente}</td>
    <td contenteditable className="campo">{venta.Encargado}</td>
    <td contenteditable className="campo">{venta.Valor_Total}</td>
    <td><select name="estado" id="tabla__estado_selector" className="campo">
    <option selected="selected" value ={venta.Estado} selected disabled hidden>{venta.Estado}</option>
    <option value="Proceso">En Proceso</option>
    <option value="Cancelada">Cancelada</option>
    <option value="Entregada">Entregada</option>
    </select></td>
</tr>
    )
}

export default VentaRow;