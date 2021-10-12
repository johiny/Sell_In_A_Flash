
const Detallesblock = () => {
    return(
        <div class="detalles">  
        <h1 class="cuerpo_central__detalles-titulo">Detalles</h1>
        <table class="cuerpo_central__detalles-tabla">
            <colgroup>
                <col span="2"></col>
            </colgroup>
            <tr class="cuerpo_central__detalles-headers">
                <th>Producto</th>
                <th>Precio Unidad</th>
                <th>Cantidad</th>
            </tr>
            <tr>
                <td>Aguacate</td>
                <td>5000</td>
                <td>12</td>

            </tr>
        </table>      
    </div>
    )
}

export default Detallesblock;