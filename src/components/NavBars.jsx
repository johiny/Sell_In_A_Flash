import Logo from 'media/Logo.png';
import {NavLink} from "react-router-dom";
const NavBars = () => {
    return(
        <header className="wrapper">
        <nav>
            <ul className="navlinks">
        <li>Inicio</li>
        <li>Info Ventas</li>
        <NavLink to="/IndexVentas" activeClassName="selected">
        <li>Estado Ventas</li>
        </NavLink>
            </ul>    
        </nav>
        <div id="leftbar">
            <img id="logo" src={Logo} alt="logo SF"></img>
            <ul id="leftbar_links">
                <li>Gestión</li>
            </ul>
        </div>
    </header>
    )
}

export default NavBars;