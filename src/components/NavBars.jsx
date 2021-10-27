import Logo from 'media/logo.png';
import {NavLink,Link} from "react-router-dom";
import Logout from "media/logout.svg"
const NavBars = () => {
    return(
        <header className="wrapper">
        <nav>
            <ul className="navlinks">
        <NavLink to="/" activeClassName="selected">
        <li>Inicio</li>    
        <li><img className="Logout_logo" src={Logout}></img>Cerrar Sesión</li>
        </NavLink>
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