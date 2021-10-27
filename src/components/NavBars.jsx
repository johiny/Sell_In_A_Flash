import Logo from 'media/logo.png';
import {NavLink,Link} from "react-router-dom";
import Logout from "media/logout.svg"
import { useAuth0 } from '@auth0/auth0-react';


const NavBars = () => {
    const { loginWithRedirect, isAuthenticated, isLoading, logout} = useAuth0();
    const {} = useAuth0();
    return(
        <header className="wrapper">
            <nav>
                <ul className="navlinks">
                    {isAuthenticated ? (
                        <button onClick={() => logout()} className='boton-generico boton-salir'> Cerrar Sesión </button>  ) : (
                            
                            <button onClick={() => loginWithRedirect()} className='boton-generico boton-entrar'>Iniciar Sesión</button>                        )}           
                </ul>    
            </nav>
            <div id="leftbar">
                <Link to="/index"><img id="logo" src={Logo} alt="logo SF"></img></Link>
                <ul id="leftbar_links">
                    <li>Productos</li>
                    <NavLink to="/Maestro-Ventas"><li>Ventas</li></NavLink>
                    <div><NavLink to="/InterfazGestionUsuarios/Administrador"><li><i className="far fa-address-card">Usuarios</i></li></NavLink> </div>
                </ul>
            </div>
        </header>
    )
}

export default NavBars;