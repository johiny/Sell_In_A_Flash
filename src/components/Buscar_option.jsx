import Find from 'media/Find_icon.svg';
const Buscar_option = () =>{
    return(
        <div className="cuerpo_central__opciones-caja2">
            <h3>¿O prefieres buscar<br></br> algo en específico?</h3>
            <div className="cuerpo_central__opciones-caja2-buscador" id="Buscador">
            <input type="search" placeholder="Buscar"></input>
            <button><a href="google.com"><img src={Find}></img></a></button>
            </div>
        </div>    
    )
}

export default Buscar_option;