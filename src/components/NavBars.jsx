import Logo from 'media/Logo.png';
import {NavLink,Link} from "react-router-dom";
const NavBars = () => {
    return(
        <header className="wrapper">
        <nav>
            <ul className="navlinks">
        <li>Inicio</li>
        <li>Info Ventas</li>
        <NavLink to="/Maestro-Ventas" activeClassName="selected">
        <li>Estado Ventas</li>
        </NavLink>
            </ul>    
        </nav>
        <div id="leftbar">
            <Link to="/index"><img id="logo" src={Logo} alt="logo SF"></img></Link>
            <ul id="leftbar_links">
                <li>Gestión</li>
            </ul>
        </div>
    </header>
    )
}

export default NavBars;