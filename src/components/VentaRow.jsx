
const VentaRow = (venta) => {
    return(
<tr>
    <td>{venta.id}</td>
    <td contenteditable class="campo">{venta.Fecha}</td>
    <td contenteditable class="campo">{venta.Cantidad}</td>
    <td contenteditable class="campo">{venta.Cliente}</td>
    <td contenteditable class="campo">{venta.Encargado}</td>
    <td contenteditable class="campo">{venta.Valor_Total}</td>
    <td><select name="estado" id="tabla__estado_selector" class="campo">
    <option selected="selected" value ={venta.Estado} selected disabled hidden>{venta.Estado}</option>
    <option value="Proceso">En Proceso</option>
    <option value="Cancelada">Cancelada</option>
    <option value="Entregada">Entregada</option>
    </select></td>
</tr>
    )
}

export default VentaRow;