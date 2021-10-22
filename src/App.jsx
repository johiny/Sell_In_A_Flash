
import logo from './Imagenes/logo.png';
import SinFoto from './Imagenes/SinFoto.png';
import './Styles/App.css';
import './Styles/App2.css';
import DatosInput from './Componentes/DatosFormulario';
import BotonesRegistro from './Componentes/Botones';

function App() {
  return (
    <div className="App">
    <header className="wrapper">
    <main>
      <nav>
        <ul className="navlinks">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Info Ventas</a></li>
          <li><a href="#">Estado Ventas </a></li>
        </ul>    
      </nav>
    <div id="leftbar">
      <div>
        <img src={logo} alt='Imagen' className='logo'/>
      </div>  
        <ul id="leftbar_links">
          <li><a href="#">Gestión</a></li>
        </ul>
    </div>
    </main>
    </header>
    <section></section>
      <form>
        <div>
          <label className="Etiquetas" for="ID">
            ID Producto
              <input className="CamposInput" name="ID"/>
          </label>
          <label className="Etiquetas" for="Precio">
            Precio
              <input className="CamposInput" name="Precio" type="number" required/>
          </label>
          <label className="Etiquetas" for="Status">
            Status
              <select className="CamposInput" name="estado" id="estado" required>
                <option value="" selected></option>
                <option value="">Disponible</option>
                <option value="">No disponible</option>
              </select>
          </label>
          <label className="Etiquetas" for="Descripción">
            Descripción
              <textarea className="CamposInput CampoDescrip" name="Descripción" type="text" required/>
          </label>
        </div>
        <div>
          <button className="BotonesRegistro" type="submit">Guardar</button>
          <button className="BotonVer" type="button">Ver</button>
        </div>
        <section>
          <img className="FotoProducto" src={SinFoto} alt='Imagen Producto'/>
        </section>
        <div>
            <ul>
              <li>
                <span></span>
              </li>
            </ul>
        </div>
        <div>
            <input className="CampoBuscar" type="text" name="" id=""/>
        </div>
        <div>
            <button className="BotonBuscar" type="button">Buscar</button>
        </div>
          <table className="contenido">
              <thead className="tabla">
                  <tr>
                    <th></th>
                    <th>ID Producto</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <th className="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th className="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th className="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th className="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th className="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
                    <div className="LeyendaMostrar">
                        Mostrar
                        <select name="num entradas" id="num entradas">
                            <option value="15" selected>5</option>
                            <option value="10">10</option>
                            <option value="15">15</option> 
                        </select>
                        entradas
                    </div>
                    <div>
                        <ul className="pages">
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
