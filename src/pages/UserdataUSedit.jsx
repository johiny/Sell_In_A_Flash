import imagenn from "../media/nn.jpg";

function UserdataUSedit(){
    return(
        <>
        
            <div>
                <label>
                    ID de usuario
                </label>
                <input name="id" type="search" list="usuarios"/>

            </div>
            
            <button class="mainguButton" type="button">
                Buscar ID
            </button>
            <fieldset  height="230px">
                <legend>
                    Foto
                </legend>
                <img src={imagenn} height="500px"/>
            </fieldset>
            <table class="tabus1" cellspacing="20">
                <tr>
                    <th > Id. (Cédula) </th>
                    <th > Nombres </th>
                    <th > Apellidos </th>
                    <th > Correo </th>
                    <th > Teléfono </th>
                    <th > Cargo </th>
                    <th > Roll </th>
                    

                </tr>
                <tbody>
                    <tr>
                        <td >1152443922</td>
                        <td >Juan Esteban </td>
                        <td >Orozco Botero</td>
                        <td >jeorozcob@gmail.com</td>
                        <td >3007041800</td>
                        <td >Password</td>
                        <td >Confirmar Password</td>
                        
                    </tr>
                    <tr>
                        <td><input type="number" name="cedula" placeholder="Cédula..."/></td>
                        <td><input type="text" name="nombre" placeholder="Nombres..."/></td>
                        <td><input type="text" name="apellidos" placeholder="Apellidos..."/></td>
                        <td><input type="text" name="correo" placeholder="Correo..."/></td>
                        <td><input type="text" name="telefono" placeholder="Teléfono..."/></td>
                        <td><input type="password" name="password" placeholder="Contraseña nueva..."/></td>
                        <td><input type="password" name="password" placeholder="Verificar contraseña..."/></td>
                        

                    </tr>
                </tbody>
            </table>
            <div>
                <div><form>
                    <label for="contraseña">

                    </label>
                </form></div>
                <a href="http://google.com"><button class="mainguButton" type="submit">
                    Actualizar Datos
                </button></a>
            </div>
    

        </>
    )
};

export default UserdataUSedit;