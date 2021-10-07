import NavBars from 'components/NavBars';
import 'styles/Styles.css';
import CuerpoCentral from 'components/CuerpoCentral';
const IndexVentas = () => {
    return(
    <div>
    <NavBars/>
    <main>
    <CuerpoCentral titulo ="cuerpo_central__Ventas-index-titulo" contenido="cuerpo_central__opciones"/>
    </main>
    <footer>
    </footer>
    </div>
    )
}

export default IndexVentas;