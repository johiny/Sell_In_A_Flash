import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header class="wrapper">
    <main>
      <nav>
        <ul class="navlinks">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Info Ventas</a></li>
          <li><a href="#">Estado Ventas </a></li>
        </ul>    
      </nav>
    <div id="leftbar">
      <div>
        <img id="logo" src="Imagen/logo.png"/>
      </div>  
        <ul id="leftbar_links">
          <li><a href="#">Gestión</a></li>
        </ul>
    </div>
    </main>
    </header>
    <section></section>
      <form>
        <div class="Datos">
          <label for="ID">
            ID Producto
              <input class="CamposInput" name="ID"/>
          </label>
          <br></br>
          <br></br>
          <label class="CampoDescrip" for="Descripción">
            Descripción
              <input class="cajatexto" name="Descripción" type="text" required/>
          </label>
          <br></br>
          <br></br>
          <label class="CampoPrecio" for="Precio">
            Precio
              <input name="Precio" type="number" required/>
          </label>
          <label class="CampoStatus">
            Status
              <select class="CamposInput" name="estado" id="estado">
                <option value="" selected></option>
                <option value="">Disponible</option>
                <option value="">No disponible</option>
              </select>
          </label>
        </div>
        <br></br>
        <br></br>
        <div>
          <button class="BotonesRegistro" type="submit">Guardar</button>
          <button class="BotonVer" type="button">Ver</button>
        </div>
        <section>
            <img class="imagProducto" src="./Imagen/producto-sin-imagen-600x600.jpg" alt="Imágen Producto"/>
        </section>
        <div>
            <ul>
              <li>
                <span><input type="checkbox"/></span>
              </li>
            </ul>
        </div>
        <div>
            <input class="CampoBuscar" type="text" name="" id=""/>
        </div>
        <div>
            <button class="BotonBuscar" type="button">Buscar</button>
        </div>
          <table class="contenido">
              <thead class="tabla">
                  <tr>
                    <th type="checkbox"></th>
                    <th>ID Producto</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <th class="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th class="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th class="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th class="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th class="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
                    <div class="LeyendaMostrar">
                        Mostrar &NonBreakingSpace;
                        <select name="num entradas" id="num entradas">
                            <option value="15" selected>5</option>
                            <option value="10">10</option>
                            <option value="15">15</option> 
                        </select>
                        entradas
                    </div>
                    <div>
                        <ul class="pages">
                            <li><span>1</span></li>
                            <li><button>2</button></li>
                            <li><button>3</button></li>
                            <li><button>4</button></li>
                            <li><button>...</button></li>
                            <li><button>9</button></li>
                            <li><button>10</button></li>
                        </ul>
                    </div>
    </form>
  </div>
  );
}

export default App;
