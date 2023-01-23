import Buscador from "components/Buscador.jsx"
const BuscarOption = (props) =>{
    return(
        <div className="cuerpo_central__opciones-caja2">
            <h3>¿Prefieres buscar<br></br> algo en específico?</h3>
            <Buscador estilo="Buscador_index_Ventas" setBusqueda={props.setBusqueda} busqueda={props.busqueda}/>
        </div>    
    )
}

export default BuscarOption;