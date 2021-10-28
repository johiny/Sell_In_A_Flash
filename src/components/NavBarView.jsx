import logo from '../Imagenes/logo.png';

const NavBarView = () => {
    return(
        <div>
        <header className="wrapper">
        <main>
          <nav>
            <ul className="navlinks">
              <li><a href="#">Buscar</a></li>
              <li><a href="#"></a></li>
              <li><a href="#">Estado Ventas</a></li>
            </ul>    
          </nav>
        <div id="leftbar">
          <div>
            <img src={logo} alt='Imagen' className='logo'/>
          </div>  
            <ul id="leftbar_links">
              <li><a href="#">Registro</a></li>
            </ul>
        </div>
        </main>
        </header>
        </div>
    )
}

export default NavBarView