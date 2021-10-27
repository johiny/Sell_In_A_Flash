import { Link } from "react-router-dom";
import BotonCs from "components/BotonCs";
import BotonGg from "components/BotonGg";
import Inputs from "components/inputs";
import Boton from "components/BotonJ";
import logo from "media/logo.png"
import { useAuth0 } from "@auth0/auth0-react";
import "styles/estilos.css"
function Login(){

    const {isAuthenticated, isLoading} = useAuth0();
    
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div className="body_login">
            <header>
                <img src={logo} alt="logo" className="logo"/>
            </header>
                <form className="formulario">
                    <div>
                        <h1 className="titulo_login">Inicio de sesión</h1>
                    </div>
                    <div>
                        <Inputs nombre='ID Usuario' icono='fas fa-user icono' tipo='text'/>
                        <Inputs nombre='Contraseña' icono='fas fa-key icono' tipo='password'/>
                        <div className="posicion">
                            {isAuthenticated ? <Boton mensaje='Index' className='boton-generico boton-entrar' link='/index'/> : <Boton mensaje='Inicia sesión' className='boton-generico boton-entrar' link='/index'/>}
                            <div className="enlace">
                                <Link to='/'>¿Recuperar Contraseña?</Link>
                                <Link to='/Registro'>Registrate</Link>
                            </div>
                            <div>--------------------  O  --------------------</div>
                            {isAuthenticated ? <BotonCs/> : <BotonGg/>}
                        </div>
                    </div>
                </form>
        </div>
    );
}

export default Login;