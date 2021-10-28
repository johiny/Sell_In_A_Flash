import { Link, Redirect } from "react-router-dom";
import BotonCs from "components/BotonCs";
import BotonGg from "components/BotonGg";
import ReactLoading from 'react-loading';
import logo from "media/logo.png"
import { useAuth0 } from "@auth0/auth0-react";
import "styles/estilos.css"

function Login(){

    const {isAuthenticated, isLoading, loginWithRedirect} = useAuth0();
    
    if (isLoading) {return <ReactLoading type='spin' color='red' height={157} width={95}/>};

    return (
        <>
        
        {isAuthenticated ? (
            //<Link to='/index'><Boton mensaje='Index' className='boton-generico boton-entrar' link='/index'/></Link>
            <Redirect to="/index"/>

        ):(
        <div className="body_login">
            <header>
                <img src={logo} alt="logo" className="logo"/>
            </header>
                <form className="formulario">
                    <div>
                        <h1 className="titulo_login">Inicio de sesión</h1>
                    </div>
                    <div>
                        
                        <div className="posicion">
                            <button onClick={() => loginWithRedirect()} className='boton-generico boton-entrar'>Iniciar Sesión</button>
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
        )}
        </>
    );
}

export default Login;