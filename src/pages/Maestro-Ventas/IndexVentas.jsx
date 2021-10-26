import 'styles/Styles.css';
import CajaOption from 'components/CajaOption';
import BuscarOption from 'components/BuscarOption';
const IndexVentas = () => {
    return(
    <>
    <h1 className="cuerpo_central__Ventas-index-titulo">Ventas</h1>
    <div className="cuerpo_central__opciones">
    <CajaOption titulo="¿Quieres ver la lista" subtitulo="completa?" mensajeboton="Listar" link="Maestro-Ventas/Table"/>
    <BuscarOption/>
    <CajaOption titulo="¿O quieres registar" subtitulo="una nueva venta?" mensajeboton="Nueva Venta" link="Maestro-Ventas/NuevaVenta"/>     
    </div>
    </>
    )
}

export default IndexVentas;