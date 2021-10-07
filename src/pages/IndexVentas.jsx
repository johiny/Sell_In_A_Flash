import NavBars from 'components/NavBars';
import 'styles/Styles.css';
import Cuerpo_central from 'components/Cuerpo_central';
const IndexVentas = () => {
    return(
    <div>
    <NavBars/>
    <main>
    <Cuerpo_central titulo ="cuerpo_central__Ventas-index-titulo" contenido="cuerpo_central__opciones"/>
    </main>
    <footer>
    </footer>
    </div>
    )
}

export default IndexVentas;