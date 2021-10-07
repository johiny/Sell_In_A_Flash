import Logo from 'media/Logo.png';
import {Link} from "react-router-dom";
const NavBars = () => {
    return(
        <header className="wrapper">
        <nav>
            <ul className="navlinks">
        <li>Inicio</li>
        <li>Info Ventas</li>
        <Link to="/IndexVentas">
        <li>Estado Ventas</li>
        </Link>
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