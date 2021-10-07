import VentaRow from "components/VentaRow.jsx"
const Tabla = () => {
    return(
        <div>
        <div class="tabla">
            <table id="tabla">
                <colgroup>
                    <col span="6"></col>
                </colgroup>    
                    <tr>
                        <th id="tabla__id">ID</th>
                        <th id="tabla__date">Fecha</th>
                        <th id="tabla__cantidad">Cantidad</th>
                        <th id="tabla__cliente">Cliente</th>
                        <th id="tabla__encargado">Encargado</th>
                        <th id="tabla__valor-total">Valor Total</th>
                        <th id="tabla__estado">Estado</th>
                    </tr>
                <VentaRow Fecha = "24/03/2009" Cantidad="30" Cliente ="198567845" Encargado ="Jose Antonio" Valor_Total="400000" Estado="Entregada"/>
                <VentaRow Fecha = "24/03/2009" Cantidad="30" Cliente ="198567845" Encargado ="Jose Antonio" Valor_Total="400000" Estado="Entregada"/>
                <VentaRow Fecha = "24/03/2009" Cantidad="30" Cliente ="198567845" Encargado ="Jose Antonio" Valor_Total="400000" Estado="Entregada"/>
                <VentaRow Fecha = "24/03/2009" Cantidad="30" Cliente ="198567845" Encargado ="Jose Antonio" Valor_Total="400000" Estado="Entregada"/>
                <VentaRow Fecha = "24/03/2009" Cantidad="30" Cliente ="198567845" Encargado ="Jose Antonio" Valor_Total="400000" Estado="Entregada"/>
                <VentaRow Fecha = "24/03/2009" Cantidad="30" Cliente ="198567845" Encargado ="Jose Antonio" Valor_Total="400000" Estado="Entregada"/>
                <VentaRow Fecha = "24/03/2009" Cantidad="30" Cliente ="198567845" Encargado ="Jose Antonio" Valor_Total="400000" Estado="Entregada"/>
                <VentaRow Fecha = "24/03/2009" Cantidad="30" Cliente ="198567845" Encargado ="Jose Antonio" Valor_Total="400000" Estado="Entregada"/>
            </table>
        </div>
        <div id="guardar-popup">
        </div>
        </div>
    )
}

export default Tabla;