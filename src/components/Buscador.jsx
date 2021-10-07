import Find from 'media/Find_icon.svg';
const Buscador = (props) => {
    return(
        <div className={props.estilo} id="Buscador">
            <input type="search" placeholder="Buscar"></input>
            <button><a href="google.com"><img src={Find}></img></a></button>
            </div>
    )
}

export default Buscador;