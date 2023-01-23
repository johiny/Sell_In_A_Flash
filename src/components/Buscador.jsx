import Find from 'media/Find_icon.svg';
import { useNavigate } from "react-router-dom";
// Buscador
const Buscador = (props) => {

    return(
        <div className={props.estilo} id="Buscador">
            <input value={props.busqueda} type="search" placeholder="Buscar" onChange={(e) => props.setBusqueda(e.target.value)}></input>
            <button><img src={Find} alt="lupa_gris_pequeña"></img></button>
            </div>
    )
}

export default Buscador;