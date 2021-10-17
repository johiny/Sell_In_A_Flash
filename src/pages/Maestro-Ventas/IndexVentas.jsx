import 'styles/Styles.css';
import ListarOption from 'components/ListarOption';
import BuscarOption from 'components/BuscarOption';
const IndexVentas = () => {
    return(
    <>
    <h1 className="cuerpo_central__Ventas-index-titulo">Ventas</h1>
    <div className="cuerpo_central__opciones">
    <ListarOption/>
    <BuscarOption/>
    </div>
    </>
    )
}

export default IndexVentas;