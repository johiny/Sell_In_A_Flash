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
                    <li>Gestión Productos</li>
                    <NavLink to="/Maestro-Ventas"><li>Gestión Ventas</li></NavLink>
                    <NavLink to="/InterfazGestionUsuarios/Administrador"><li><i className="far fa-address-card"></i>Gestión Usuarios</li></NavLink>
                </ul>
            </div>
        </header>
    )
}

export default NavBars;