import Logo from 'media/Logo.png';
const NavBars = () => {
    return(
        <header className="wrapper">
        <nav>
            <ul className="navlinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Info Ventas</a></li>
        <li><a href="#">Estado Ventas </a></li>
            </ul>    
        </nav>
        <div id="leftbar">
            <img id="logo" src={Logo}></img>
            <ul id="leftbar_links">
                <li><a href="#">Gestión</a></li>
            </ul>
        </div>
    </header>
    )
}

export default NavBars;