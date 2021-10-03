const rows = document.getElementById("tabla");

insertarFila = (rows,venta)=> {rows.insertAdjacentHTML("beforeend",`
<tr>
<td>${venta.ID}</td>
<td contenteditable>${venta.Fecha}</td>
<td contenteditable>${venta.Cantidad}</td>
<td contenteditable>${venta.Cliente}</td>
<td contenteditable>${venta.Encargado}</td>
<td contenteditable>${venta.Valor_Total}</td>
<td><select name="estado" id="tabla__estado_selector">
    <option value="proceso">En Proceso</option>
    <option value="cancelada">Cancelada</option>
    <option value="entregada">Entregada</option>
</select></td>
</tr>`);}

    fetch("Ventas_test.json")
    .then(Response => Response.json())
    .then(ventas => {
        for(venta in ventas){
            insertarFila(rows,ventas[venta]);
        }
    });

    

    