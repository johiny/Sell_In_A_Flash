import imagenn from "media/nn.jpg";
function UserdataAD(){
    return(
        <>
            <div class = "buscarID">
                <label>
                    ID de usuario
                </label>
                <input name="id" type="search"/>   
            </div>        
                <button class="mainguButton" type="button">
                    Buscar ID
                </button>
            
            <fieldset class="fieldsetgu" height="230px">
                <legend>
                    Foto
                </legend>
                <img src={imagenn} height="500px"/>
            </fieldset>
            <div class="tabladedatos">
                <table class="tabus1" cellpadding="50" cellspacing="20">
                    <tr>
                        <th > Id. (Cédula) </th>
                        <th > Nombres </th>
                        <th > Apellidos </th>
                        <th > Correo </th>
                        <th > Teléfono </th>
                        <th > Cargo </th>
                        <th > Roll </th>
                        <th > Estado </th>

                    </tr>
                    <tbody>
                        <tr>
                            <td >1152443922</td>
                            <td >Juan Esteban </td>
                            <td >Orozco Botero</td>
                            <td >jeorozcob@gmail.com</td>
                            <td >3007041800</td>
                            <td >Secretario</td>
                            <td >Usuario</td>
                            <td >Autorizado</td>
                        </tr>
                        <tr>
                            <td><input type="number" name="cedula" placeholder="Cédula..."/></td>
                            <td><input type="text" name="nombre" placeholder="Nombres..."/></td>
                            <td><input type="text" name="apellidos" placeholder="Apellidos..."/></td>
                            <td><input type="text" name="correo" placeholder="Correo..."/></td>
                            <td><input type="text" name="telefono" placeholder="Teléfono..."/></td>
                            <td><input type="text" name="cargo" placeholder="Cargo..."/></td>
                            <td><select type="text" name="rol" placeholder="Rol...">
                                <option value="vendedor">Vendedor</option> 
                                <option value="administrador">Administrador</option>
                                <option value="ejecutivo">Ejecutivo</option> 
                                <option value="operario">Operario</option>
                                <option value="director">Director</option> 
                                <option value=" gerente comercial">Gerente comercial</option>
                            </select></td>
                            <td><select type="text" name="estado" placeholder="Estado...">
                                <option value="pendiente">Pendiente</option> 
                                <option value="autorizado">Autorizado</option>
                                <option value="no_autorizado">No autorizado</option> 
                            </select></td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div class = "botonActualizar">
                <a href="http://google.com"><button class="mainguButton" type="submit">
                    Actualizar Datos
                </button></a>
            </div>
        </>
    )
};

export default UserdataAD;