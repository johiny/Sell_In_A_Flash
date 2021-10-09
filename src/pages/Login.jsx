import {Link} from 'react-router-dom'
import Inputs from "/components/inputs";
import Boton from "/components/Boton";
import logo from "/media/logo.png"

function Login(){
    return (
        <div>
            <header>
                <img src={logo} alt="logo" className="logo"/>
            </header>
                <form className="formulario">
                    <div>
                        <h1>Sell In A Flash</h1>
                    </div>
                    <div className="posicion">
                        <Inputs nombre='ID Usuario' icono='fas fa-user icono' tipo='text'/>
                        <Inputs nombre='Contraseña' icono='fas fa-key icono' tipo='password'/>
                        <Link to='/index'>
                            <Boton nombre='Entrar' clases='boton-generico boton-entrar'/>
                        </Link> 
                        <Boton nombre={<i class="fab fa-google"></i>} Snombre='Entrar Con Google' clases='boton-generico'/>   
                        <div>
                            <a href="" className="enlace">¿ Recuperar Contraseña ?</a>
                        </div>
                    </div>
                </form>
        </div>
    );
}

export default Login;