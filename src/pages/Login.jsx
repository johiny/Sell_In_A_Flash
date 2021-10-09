import Inputs from "../components/inputs";
import logo from "../imagenes/logo.png"

function Login(){
    return (
        <div>
            <header>
                <img src={logo} alt="logo" className="logo"/>
            </header>
            <main>
                <form className="formulario">
            <div>
                <h1>Sell In A Flash</h1>
            </div>
            <div className="posicion">
                <Inputs nombre='ID Usuario' icono='fas fa-user icono' tipo='text'/>
                <Inputs nombre='Contraseña' icono='fas fa-key icono' tipo='password'/>
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

export default Login;