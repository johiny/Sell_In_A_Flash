import BuscarOption from "components/BuscarOption";
import ListarOption from "components/ListarOption";
import Buscador from "components/Buscador.jsx"
import Tabla from "components/Tabla.jsx"
import Detallesblock from "components/Detallesblock.jsx";
const CuerpoCentral = (props) =>{
    if (props.contenido === "cuerpo_central__opciones")
    {
    return(
    <div className="cuerpo_central">
    <h1 className={props.titulo}>Ventas</h1>
    <div className={props.contenido}>
    <ListarOption/>
    <BuscarOption/>
    </div>
    </div>
    )
    }
    else if (props.contenido === "tabla") {
        return(
        <div className="cuerpo_central">
        <h1 className={props.titulo}>Ventas</h1>
            <Buscador estilo="Buscador_Tabla_Ventas"/>
            <Tabla/>
        </div>
        )
    }
    else{
        return(
        <div className="cuerpo_central">
            <h1 className="cuerpo_central__detalles-titulo">ID</h1>
            <Detallesblock/>
        </div>
        )
    }
    
}

export default CuerpoCentral;