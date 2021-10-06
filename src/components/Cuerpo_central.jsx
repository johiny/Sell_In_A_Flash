import Buscar_option from "components/Buscar_option";
import Listar_option from "components/Listar_option";
const Cuerpo_central = () =>{
    return(
    <div className="cuerpo_central">
    <h1 className="cuerpo_central__titulo">Ventas</h1>
    <div className="cuerpo_central__opciones">
    <Listar_option/>
    <Buscar_option/>
    </div>
    </div>
    )
}

export default Cuerpo_central;