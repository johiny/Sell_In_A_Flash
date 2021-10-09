import logo from "media/Logo.png"

function Index(){
    return(
        <div>
            <header>
                <nav>
                    <ul >
                        <li><button>Inicio</button></li>
                        <li><button>Info Ventas</button></li>
                        <li><button>Estado Ventas</button></li>
                    </ul>    
                </nav>
                <div>
                    <ul >
                        <img src={logo} alt="logo" />
                        <li><button>Gestión</button></li>
                    </ul>
                </div>
            </header>
            <main>
                <ul>
                    <li>Administra tus ventas de manera sencilla</li>
                    <li><button>Comenzar</button></li>
                </ul>
            </main>
            <footer></footer>
        </div>
    );
}

export default Index;