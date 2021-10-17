import Find from 'media/Find_icon.svg';
// Buscador
const Buscador = (props) => {
    return(
        <div className={props.estilo} id="Buscador">
            <input type="search" placeholder="Buscar"></input>
            <button><img src={Find} alt="lupa_gris_pequeña"></img></button>
            </div>
    )
}

export default Buscador;