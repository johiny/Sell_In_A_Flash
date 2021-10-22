const NavBars = () => {
    return (
        <div>
          <header className="wrapper">
    <main>
      <nav>
        <ul className="navlinks">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Info Ventas</a></li>
          <li><a href="#">Estado Ventas </a></li>
        </ul>    
      </nav>
    <div id="leftbar">
      <div>
        <img src={logo} alt='Imagen' className='logo'/>
      </div>  
        <ul id="leftbar_links">
          <li><a href="#">Gestión</a></li>
        </ul>
    </div>
    </main>
    </header>
        </div>
    )
}

export default NavBars
