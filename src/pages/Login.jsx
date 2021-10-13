import {Link} from 'react-router-dom'
import Inputs from "components/inputs";
import Boton from "components/BotonJ";
import logo from "media/logo.png"
import "styles/estilos.css"
function Login(){
    return (
        <div className="body_login">
            <header>
                <img src={logo} alt="logo" className="logo"/>
            </header>
                <form className="formulario">
                    <div>
                        <h1 className="titulo_login">Sell In A Flash</h1>
                    </div>
                    <div className="posicion">
                        <Inputs nombre='ID Usuario' icono='fas fa-user icono' tipo='text'/>
                        <Inputs nombre='Contraseña' icono='fas fa-key icono' tipo='password'/>
                        <Boton mensaje='Entrar' className='boton-generico boton-entrar' link='/index'/>
                        <Boton mensaje={<i class="fab fa-google"></i>} Snombre='Entrar Con Google' className='boton-generico'/>   
                        <div>
                            <a href="" className="enlace">¿ Recuperar Contraseña ?</a>
                        </div>
                    </div>
                </form>
        </div>
    );
}

export default Login;