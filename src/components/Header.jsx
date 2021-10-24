import logo from '../media/logo.png';

function Header(){
    return(
        <>
        <header class="wrapper">
            <nav>
                <ul class="navlinks">
                    <li>
                        <a href="#">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Info Ventas
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Estado Ventas 
                        </a>
                    </li>
                </ul>
            </nav>
            <div id="leftbar">
                <img id="logo" src={logo} />
                <ul id="leftbar_links">
                    <li><a href="#">Gestión</a></li>
                </ul>
            </div>
        </header>
        </>
    )
};

export default Header;