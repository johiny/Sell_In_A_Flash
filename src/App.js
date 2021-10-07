import logo from './logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <header class="wrapper">
            <nav>
                <ul class="navlinks">
                    <li>
                        <a href="#">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Info Ventas
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Estado Ventas 
                        </a>
                    </li>
                </ul>
            </nav>
            <div id="leftbar">
                <img id="logo" src="logo.png">
                <ul id="leftbar_links">
                    <li><a href="#">Gestión</a></li>
                </ul>
            </div>
        </header>
        <main id="maingu" >
            <div>
                <label>
                    ID de usuario
                </label>
                <input name="id" type="search" list="usuarios"/>
                <!--<datalist id="usuarios">
                    
                </datalist>-->
            </div>
            
            <button class="mainguButton" type="button">
                Buscar ID
            </button>
            <fieldset  height="230px">
                <legend>
                    Foto
                </legend>
                <img src="./nn.jpg" height="500px"/>
            </fieldset>
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
                        <td><input type="number" name="cedula" placeholder="Cédula..."></td>
                        <td><input type="text" name="nombre" placeholder="Nombres..."></td>
                        <td><input type="text" name="apellidos" placeholder="Apellidos..."></td>
                        <td><input type="text" name="correo" placeholder="Correo..."></td>
                        <td><input type="text" name="telefono" placeholder="Teléfono..."></td>
                        <td><input type="text" name="cargo" placeholder="Cargo..."></td>
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
            <div>
                <a href="http://google.com"><button class="mainguButton" type="submit">
                    Actualizar Datos
                </button></a>
            </div>
        </main>
        <footer>
        </footer>

    </div>
  );
}

export default App;
