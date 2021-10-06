import NavBars from 'components/NavBars';
import 'styles/Styles.css';
import Cuerpo_central from 'components/Cuerpo_central';
const IndexVentas = () => {
    return(
    <div className="App">
    <NavBars/>
    <main>
    <Cuerpo_central/>
    </main>
    <footer>
    </footer>
    </div>
    )
}

export default IndexVentas;