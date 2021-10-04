import logo from './imagenes/logo.png';
import './estilos/estilos.css';

function App() {
  return (
    <div className="App">
    <header>
        <img src={logo} alt="logo" className="logo"/>
    </header>
    <main>
        <form className="formulario">
            <div>
                <h1>Sell In A Flash</h1>
            </div>
            <div className="posicion">
                <div className="caja-input">
                    <i className="fas fa-user icono"></i>
                    <input type="text" placeholder="ID Usuario"/>
                </div>
                <div className="caja-input">
                    <i className="fas fa-key icono"></i>
                    <input type="password" placeholder="Contraseña"/>
                </div>
                <div>
                    <button className="boton-generico boton-entrar">Entrar</button>
                </div>
                <div>
                    <button className="boton-generico"><i className="fas fa-envelope"></i> Entrar Por Correo Electronico</button>
                </div>
                <div>
                    <a href="">¿ Recuperar Contraseña ?</a>
                </div>
            </div>
        </form>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
